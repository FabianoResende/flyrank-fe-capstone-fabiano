// agente/agent.js - versão corrigida (usa __dirname para caminhos)
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const baseDir = path.resolve(__dirname);            // C:\...\capstone\agente
const logsDir = path.join(baseDir, 'logs');
const proofsPath = path.join(baseDir, '..', 'PROOFS', '05_FINAL'); // ../PROOFS/05_FINAL

const MCP_BASE = process.env.MCP_BASE || 'http://127.0.0.1:8123';

function ensureLogsDir() {
  if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true });
}

function logBuild(line) {
  ensureLogsDir();
  const p = path.join(logsDir, 'build_log.txt');
  fs.appendFileSync(p, `${new Date().toISOString()} | ${line}\n`, 'utf8');
}
function logRun(line) {
  ensureLogsDir();
  const p = path.join(logsDir, 'run_log.txt');
  fs.appendFileSync(p, `${new Date().toISOString()} | ${line}\n`, 'utf8');
}

async function listProofs() {
  // fallback: se MCP não responder, lista local
  try {
    const res = await axios.get(`${MCP_BASE}/list?path=${encodeURIComponent('./PROOFS/05_FINAL')}`, { timeout: 5000 });
    return res.data;
  } catch (err) {
    logBuild(`WARN: MCP list failed: ${err.message}. Falling back to local FS.`);
    if (fs.existsSync(proofsPath)) {
      return fs.readdirSync(proofsPath).map(f => ({ path: path.join(proofsPath, f), name: f }));
    }
    return [];
  }
}

async function readFileRemote(p) {
  const res = await axios.get(`${MCP_BASE}/read?path=${encodeURIComponent(p)}`, { timeout: 5000 });
  return res.data;
}

async function readFileLocal(p) {
  return fs.readFileSync(p, 'utf8');
}

async function main() {
  logBuild('START RUN');
  try {
    const files = await listProofs();
    logRun(`FILES_FOUND: ${JSON.stringify(files)}`);
    if (files && files.length) {
      const first = files[0].path || files[0].name || files[0];
      let content;
      try {
        content = await readFileRemote(first);
        logRun(`READ_REMOTE ${first} len=${(content||'').length}`);
      } catch {
        content = readFileLocal(first);
        logRun(`READ_LOCAL ${first} len=${(content||'').length}`);
      }
      console.log('Preview:', (content || '').slice(0, 400));
    } else {
      console.log('Nenhum arquivo encontrado');
      logRun('NO_FILES_FOUND');
    }
    logBuild('SUCCESS');
    process.exit(0);
  } catch (err) {
    logBuild(`ERROR: ${err.message}`);
    console.error('ERROR:', err.message);
    process.exit(1);
  }
}

main();

const http = require('http');
const path = require('path');
const fs = require('fs');

async function callReadFile(pathToRead) {
  const body = JSON.stringify({ tool: 'read_file', path: pathToRead });
  return new Promise((resolve, reject) => {
    const req = http.request({
      hostname: '127.0.0.1',
      port: 3001,
      path: '/execute',
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

(async () => {
  try {
    const userPrompt = process.argv.slice(2).join(' ') || 'Leia o README e retorne a primeira linha';
    console.log('AGENT: prompt ->', userPrompt);

    const targetPath = './README.md';

    const resp = await callReadFile(targetPath);
    if (!resp || !resp.ok) {
      console.error('AGENT: read_file falhou', resp);
      process.exit(2);
    }

    const firstLine = resp.firstLine || '';
    const result = `Resumo automático (primeira linha): ${firstLine}`;

    const timestamp = new Date().toISOString();
    const logLine = `${timestamp} | PROMPT: ${userPrompt} | RESULT: ${result}\n`;
    fs.appendFileSync('./capstone/agent_run.log', logLine, 'utf8');

    console.log('AGENT RESULT:', result);
    process.exit(0);
  } catch (err) {
    console.error('AGENT ERROR:', err.message || err);
    process.exit(1);
  }
})();
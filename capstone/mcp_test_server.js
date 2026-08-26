/* capstone/mcp_test_server.js */
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3001;
const HOST = '127.0.0.1';
const ROOT = path.resolve(__dirname); // pasta capstone
const pidFile = path.join(ROOT, 'mcp_test_server.pid');

function safeJsonResponse(res, statusCode, obj) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(obj));
}

const server = http.createServer((req, res) => {
  if (req.method !== 'POST' || req.url !== '/execute') {
    safeJsonResponse(res, 404, { ok: false, error: 'not found' });
    return;
  }

  let body = '';
  req.on('data', chunk => {
    body += chunk;
    if (body.length > 1e6) req.socket.destroy();
  });

  req.on('end', () => {
    let reqBody;
    try {
      reqBody = JSON.parse(body || '{}');
    } catch (err) {
      console.error('mcp error: invalid json', err);
      safeJsonResponse(res, 400, { ok: false, error: 'invalid json' });
      return;
    }

    if (!reqBody || typeof reqBody.path !== 'string') {
      safeJsonResponse(res, 400, { ok: false, error: 'missing path' });
      return;
    }

    try {
      const requested = reqBody.path;
      const fullPath = path.isAbsolute(requested) ? path.resolve(requested) : path.resolve(ROOT, requested);

      const allowedRoot = ROOT + path.sep;
      if (!(fullPath === ROOT || fullPath.startsWith(allowedRoot))) {
        safeJsonResponse(res, 403, { ok: false, error: 'access denied' });
        return;
      }

      if (!fs.existsSync(fullPath) || !fs.statSync(fullPath).isFile()) {
        safeJsonResponse(res, 404, { ok: false, error: 'file not found' });
        return;
      }

      const content = fs.readFileSync(fullPath, 'utf8');
      const firstLine = content.split(/\r?\n/)[0] || '';
      safeJsonResponse(res, 200, { ok: true, firstLine });
    } catch (err) {
      console.error('mcp error:', err && err.stack ? err.stack : err);
      safeJsonResponse(res, 500, { ok: false, error: 'internal server error' });
    }
  });

  req.on('error', err => {
    console.error('request error', err);
    safeJsonResponse(res, 500, { ok: false, error: 'request error' });
  });
});

server.on('error', (err) => {
  if (err && err.code === 'EADDRINUSE') {
    console.error(`ERROR: port ${PORT} already in use. Another instance may be running.`);
    process.exit(1);
  } else {
    console.error('server error', err);
    process.exit(1);
  }
});

server.listen(PORT, HOST, () => {
  console.log(`mcp_test_server listening on ${HOST}:${PORT}`);
  try { fs.writeFileSync(pidFile, String(process.pid), 'utf8'); } catch (e) {}
});

function cleanupAndExit(code = 0) {
  try { if (fs.existsSync(pidFile)) fs.unlinkSync(pidFile); } catch (e) {}
  process.exit(code);
}

process.on('exit', () => cleanupAndExit(0));
process.on('SIGINT', () => cleanupAndExit(0));
process.on('SIGTERM', () => cleanupAndExit(0));
process.on('uncaughtException', (err) => {
  console.error('uncaughtException', err && err.stack ? err.stack : err);
  cleanupAndExit(1);
});
process.on('unhandledRejection', (reason) => {
  console.error('unhandledRejection', reason && reason.stack ? reason.stack : reason);
  cleanupAndExit(1);
});
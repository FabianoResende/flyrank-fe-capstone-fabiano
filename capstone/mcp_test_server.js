// capstone/mcp_test_server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3001;
const HOST = '127.0.0.1';
const ROOT = path.resolve(__dirname); // pasta capstone

const server = http.createServer(async (req, res) => {
  if (req.method !== 'POST' || req.url !== '/execute') {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: false, error: 'not found' }));
    return;
  }

  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    try {
      const reqBody = JSON.parse(body || '{}');
      if (!reqBody || typeof reqBody.path !== 'string') {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: 'missing path' }));
        return;
      }

      // Normalize and resolve path relative to capstone root
      let requested = reqBody.path;
      // If user sent an absolute Windows path, allow it only if inside ROOT
      let fullPath = path.isAbsolute(requested) ? path.resolve(requested) : path.resolve(ROOT, requested);

      // Security: ensure file is inside ROOT
      const allowedRoot = ROOT + path.sep;
      if (!(fullPath === ROOT || fullPath.startsWith(allowedRoot))) {
        res.writeHead(403, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: 'access denied' }));
        return;
      }

      // Read file
      const content = fs.readFileSync(fullPath, 'utf8');
      const firstLine = content.split(/\r?\n/)[0] || '';
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true, firstLine }));
    } catch (err) {
      console.error('mcp error:', err && err.stack ? err.stack : err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: false, error: 'internal server error' }));
    }
  });

  req.on('error', err => {
    console.error('request error', err);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: false, error: 'request error' }));
  });
});

server.listen(PORT, HOST, () => {
  console.log(`mcp_test_server listening on ${HOST}:${PORT}`);
});

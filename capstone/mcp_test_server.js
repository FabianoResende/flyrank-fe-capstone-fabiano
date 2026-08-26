// capstone/mcp_test_server.js — run with: node capstone/mcp_test_server.js
const http = require('http');
const fs = require('fs');
const port = 3001;
http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/execute') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const { tool, path } = JSON.parse(body);
        if (tool === 'read_file' && path && path.startsWith('./capstone')) {
          const content = fs.readFileSync(path, 'utf8');
          res.writeHead(200, {'Content-Type':'application/json'});
          res.end(JSON.stringify({ ok: true, firstLine: content.split(/\r?\n/)[0] }));
        } else {
          res.writeHead(400); res.end(JSON.stringify({ ok:false, error:'invalid request' }));
        }
      } catch (e) { res.writeHead(500); res.end(JSON.stringify({ ok:false, error:e.message })); }
    });
  } else { res.writeHead(404); res.end(); }
}).listen(port, '127.0.0.1', () => console.log('mcp_test_server listening on 127.0.0.1:3001'));

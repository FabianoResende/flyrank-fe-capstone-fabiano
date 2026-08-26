// capstone/agent_minimal.js
// Uso: node capstone/agent_minimal.js "Leia o README e resuma a primeira linha"
const http = require('http');
const { execSync } = require('child_process');

async function callReadFile(path) {
  const body = JSON.stringify({ tool: 'read_file', path });
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

    // 1) decidir qual arquivo ler (regra mínima: README dentro de ./capstone)
    const targetPath = './capstone/README.md';

    // 2) chamar a ferramenta read_file
    const resp = await callReadFile(targetPath);
    if (!resp || !resp.ok) {
      console.error('AGENT: read_file falhou', resp);
      process.exit(2);
    }

    // 3) processar saída (exemplo simples: compor resposta)
    const firstLine = resp.firstLine || '';
    const result = `Resumo automático (primeira linha): ${firstLine}`;

    // 4) registrar resultado localmente (log)
    const timestamp = new Date().toISOString();
    const logLine = `${timestamp} | PROMPT: ${userPrompt} | RESULT: ${result}\n`;
    require('fs').appendFileSync('./capstone/agent_run.log', logLine, 'utf8');

    // 5) imprimir resultado final (o que será mostrado na gravação)
    console.log('AGENT RESULT:', result);
    process.exit(0);
  } catch (err) {
    console.error('AGENT ERROR:', err.message || err);
    process.exit(1);
  }
})();

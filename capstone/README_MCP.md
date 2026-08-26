# MCP Test Server (capstone)

## Como rodar localmente
1. Abra uma janela PowerShell na pasta `capstone`:
   cd C:\Users\fabia\flyrank-fe-capstone-fabiano\capstone

2. Inicie o servidor:
   node .\mcp_test_server.js
   # aguarde: mcp_test_server listening on 127.0.0.1:3001

3. Em outra janela (ainda em capstone), teste o endpoint:
   $body = @{ tool = "read_file"; path = "./README.md" } | ConvertTo-Json
   Invoke-RestMethod -Method Post -Uri "http://127.0.0.1:3001/execute" -Body $body -ContentType "application/json" -TimeoutSec 30

4. Execute o agente (a partir da raiz do repo):
   cd C:\Users\fabia\flyrank-fe-capstone-fabiano
   node .\capstone\agent_minimal.js "Teste FL-07: ler README"

## Observações
- O servidor grava `mcp_test_server.pid` em `capstone/` ao iniciar.
- Logs do agente: `capstone/agent_run.log`.
- Para parar o servidor de forma controlada, use o PID escrito em `mcp_test_server.pid`.

## Provas (PROOFS)
As imagens em `capstone/PROOFS/` comprovam:
- 01_server_listening.png — servidor MCP rodando.
- 02_agent_result.png — agente retornando o resultado.
- 01-portfolio-home.png, 04-estudo-de-caso.png, etc. — páginas do portfólio.

2026-08-25 22:45 — Inventário inicial
- Branch criada: week5/FL-07 (commit 9b93ec7)
- Arquivos relevantes: capstone/src/app/portfolio, CLAUDE.md (root & capstone)
- Encontrado .env em: Semana_03/react-app-ia/.env (conteúdo não exposto)
- package.json/package-lock.json modificados em capstone (ver git status)
Ação: listar chaves do .env sem expor valores; não publicar segredos; adicionar .env ao .gitignore se necessário.

2026-08-25 23:07 — Security action
- Found REACT_APP_OMDB_API_KEY in Semana_03/react-app-ia/.env.
- Confirmed file was pushed to remote: YES/NO (substituir com resultado).
- Action taken: revoked old OMDb key and generated new key; updated local .env (not committed).
- Added .env* to .gitignore to prevent future commits.
- Notes: If old key was public, notify stakeholders and rotate any dependent services.

2026-08-25 23:14 — Commit e push da branch de trabalho
- Branch: week5/FL-07
- Ações: adicionado .gitignore (.env*), commit do BUILD_LOG e arquivos de package.
- Observação: .env localizado em Semana_03/react-app-ia/.env (conteúdo não exposto).
- Próximo passo: configurar MCP local com permissões mínimas e testar read_file seguro.
2026-08-25 HH:MM � Removed local README backup (cleanup)
2026-08-25 HH:MM � MCP read_file test
- Config: capstone/mcp_config.json (read_file only, allowed_paths ./capstone)
- Test: read_file ./capstone/README.md
- Resultado: READ_FILE_OK � first line: \

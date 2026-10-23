Set-Location C:\Users\fabia\flyrank-fe-capstone-fabiano

@"
# STILL_UGLY

**Contexto:** lista honesta de problemas visíveis e prioridades para a entrega Week 5 (Ship Feio). Use esta lista para priorizar correções após a submissão.

## Prioridade alta
- Mobile: espaçamento do hero precisa de ajuste em telas < 420px.
- CTA: contraste do foco precisa ser mais visível em temas escuros.
- Alt text: imagens do estudo de caso faltam `alt` descritivos.

## Prioridade média
- Cropar screenshots do estudo de caso; padronizar dimensões 1280×720.
- Ajustar largura máxima do parágrafo no hero para melhorar leitura em desktop.
- Verificar foco por teclado em modal e tabs (acessibilidade).

## Prioridade baixa
- Refinar sombras e bordas dos cards.
- Revisar microcopy para consistência de voz.
- Otimizar imagens (compressão sem perda visível).

## Como reproduzir / notas técnicas
- Testar em: Chrome, Edge, Firefox; Desktop e Mobile (iPhone/Android).
- Testes rápidos: Tab navigation, prefers-reduced-motion, Lighthouse (performance).
- Provas: coloque capturas em `capstone/PROOFS/` com nomes padronizados.

## Checklist antes da próxima iteração
- [ ] Corrigir mobile hero spacing
- [ ] Melhorar contraste do foco do CTA
- [ ] Adicionar alt text às imagens do estudo de caso
- [ ] Gerar e salvar screenshots em `capstone/PROOFS/`
"@ | Set-Content -Path .\capstone\STILL_UGLY.md -Encoding UTF8

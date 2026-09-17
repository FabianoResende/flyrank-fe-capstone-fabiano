# FE-03 — Fluxo de Trabalho Assistido por IA

## Rodada 1 — Prompt Vago
Prompt utilizado:
"Crie um formulário simples de configurações."

Ferramenta: ChatGPT  
Arquivo: round1/form-configuracoes-round1.html  

Observação:
Formulário simples, sem validação, sem testes, sem regras de acessibilidade ou casos extremos.  
Saída aceita sem modificações, conforme exigido pela FlyRank.

### WORKFLOW.md — Texto final (Rodada 1 vs Rodada 2)

## Rodada 2 | Prompt Preciso
Na FE‑03, a diferença entre “usar IA” e “dirigir IA” ficou muito clara quando comparei as duas rodadas. Na Rodada 1, o prompt vago — “Crie um formulário simples de configurações” — gerou um HTML básico: campos de nome, tema, checkbox de notificações e um botão “Salvar”. Não havia JavaScript, nenhuma validação, nenhuma mensagem de erro, nenhum tratamento de casos extremos e nenhuma preocupação com acessibilidade. O código funciona como layout, mas não como um formulário de configurações real. Se eu quisesse usar isso em produção, teria que praticamente reescrever tudo.

Na Rodada 2, o prompt preciso mudou completamente o resultado. O código veio em HTML + CSS + JavaScript, com validação explícita de nome e email, incluindo regex e rejeição de espaços. O formulário trata casos extremos como nome vazio, email sem “@”, email com espaços e tema não selecionado. Além disso, há mensagens de erro específicas por campo, classes visuais para destacar erros e foco automático no primeiro campo inválido. A acessibilidade também melhora: uso de `aria-live` para mensagens e estrutura mais clara de grupos de campos. A submissão só prossegue quando tudo está válido, e a mensagem “Configurações salvas com sucesso” aparece na interface, sem `alert()`.

Em termos de correção, a Rodada 1 é quase um esqueleto, enquanto a Rodada 2 entrega um fluxo completo e confiável. Em acessibilidade, a primeira ignora totalmente o tema; a segunda incorpora práticas concretas. Nos casos extremos, a Rodada 1 simplesmente não pensa neles; a Rodada 2 os trata diretamente na lógica. Sobre esforço de revisão, a Rodada 1 parece rápida, mas gera muito retrabalho. A Rodada 2 exige mais cuidado no prompt, porém o código chega muito mais perto de “pronto para uso”, reduzindo o tempo total de ajuste.

Um erro claro da IA na Rodada 1 foi não incluir email nem validação, porque o prompt não pedia. Na Rodada 2, ao especificar campos, comportamento, testes e verificação final, a IA evitou esse tipo de omissão. A lição prática da FE‑03 é simples: quanto mais explícito o fluxo de trabalho (restrições, exemplos, verificação), mais a IA se comporta como uma ferramenta de engenharia, e menos como um gerador de rascunhos soltos.
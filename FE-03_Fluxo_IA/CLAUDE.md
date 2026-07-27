# CLAUDE.md - Regras de Projeto Aprendidas na FE-03

## 1. Validacao explicita e obrigatoria em qualquer formulario
Sempre especificar no prompt que cada campo deve ter regras claras de validacao.
A IA nao deve decidir sozinha o que validar. O prompt deve definir:
- quais campos sao obrigatorios
- quais formatos sao aceitos
- quais erros devem ser exibidos
- como o usuario deve ser informado

**Motivo:**  
Na Rodada 1, a IA nao adicionou validacao porque o prompt nao pediu.  
Na Rodada 2, a validacao ficou completa porque foi explicitamente exigida.

---

## 2. Feedback de erro deve ser exibido na interface, nunca via alert()
Mensagens de erro devem aparecer abaixo dos campos, com:
- texto claro
- estilo visual de erro
- aria-live para acessibilidade
- foco automatico no primeiro erro

**Motivo:**  
Sem essa regra, modelos tendem a usar alert(), o que e ruim para UX e acessibilidade.

---

## 3. Campos obrigatorios devem receber foco automatico no primeiro erro
Sempre instruir a IA a:
- identificar o primeiro erro
- aplicar foco no campo correspondente
- impedir submissao ate correcao

**Motivo:**  
A IA so implementou foco automatico na Rodada 2 porque isso foi explicitado.

---

## 4. Emails devem ser validados com regex e rejeitar espacos
Especificar no prompt:
- regex para email
- rejeicao de espacos
- mensagens especificas para cada tipo de erro

**Motivo:**  
Na Rodada 1, a IA nao validou email.  
Na Rodada 2, a validacao ficou correta porque foi detalhada no prompt.

---

## 5. Todo prompt tecnico deve incluir uma etapa de verificacao
Sempre exigir:
- testes escritos pela IA
- execucao mental dos testes
- verificacao final explicando erros evitados e possiveis falhas

**Motivo:**  
Essa etapa transforma a IA em ferramenta de engenharia, nao apenas gerador de codigo.

---

## Conclusao
Estas regras surgiram diretamente da comparacao entre Rodada 1 e Rodada 2.  
Elas serao reutilizadas em todos os exercicios futuros (FE-06, FE-07, FE-08 e capstone), garantindo consistencia, acessibilidade e confiabilidade no desenvolvimento assistido por IA.

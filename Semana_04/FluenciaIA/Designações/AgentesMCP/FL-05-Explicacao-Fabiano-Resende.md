⭐ FL‑05 (600–900 palavras)

Introdução
A designação FL‑05, “Conceitos de Agentes e Noções Básicas do MCP”, tem como objetivo demonstrar que o estagiário compreende a diferença entre fluxos de trabalho tradicionais e sistemas agentivos, além de provar que sabe utilizar o MCP (Model Context Protocol) para executar ações que um chat comum não consegue realizar. Nesta explicação, apresento os conceitos fundamentais, classifico meu pipeline FL‑04, descrevo o papel do MCP e relato as três tarefas práticas realizadas com o servidor MCP local.

O que é um agente
Um agente de IA é um sistema que age autonomamente. Ele não apenas responde a mensagens: ele recebe um objetivo, decide quais ações tomar, escolhe ferramentas, executa essas ações, avalia resultados e continua iterando até atingir o objetivo. Essa autonomia é o que diferencia um agente de qualquer fluxo de prompts ou automação linear.

Um agente possui quatro características essenciais:

Objetivo — Ele trabalha para alcançar um estado desejado.

Ferramentas — Ele pode interagir com o mundo externo (arquivos, APIs, bancos de dados).

Tomada de decisão — Ele escolhe o próximo passo com base no contexto.

Ciclo de ação e avaliação — Ele age, verifica o resultado e ajusta o plano.

Por isso, agentes são considerados sistemas que agem, não apenas sistemas que respondem.

O que é MCP (Model Context Protocol)
O MCP é descrito como a “porta USB‑C para aplicações de IA”. Ele é um protocolo que permite que modelos como Claude, Cursor ou outros clientes MCP usem ferramentas externas de forma segura e estruturada.

O MCP possui três primitivos:

Ferramentas — ações que o modelo pode executar (ler arquivos, consultar APIs, listar diretórios).

Recursos — dados que o modelo pode acessar.

Prompts — instruções estruturadas que guiam o comportamento.

Sem MCP, o modelo só conversa.
Com MCP, o modelo interage com o mundo real.

Ele transforma um modelo de linguagem em um sistema capaz de agir, e por isso é fundamental para construir agentes verdadeiros.

Diferença entre fluxo de trabalho e agente
A distinção entre workflow e agente é central na FL‑05.

Workflow (fluxo de trabalho)
Linear

Determinístico

Passos fixos

Não toma decisões

Não escolhe ferramentas

Não avalia resultados

Apenas segue uma sequência pré‑definida

Agente
Autônomo

Decide o próximo passo

Escolhe ferramentas

Avalia resultados

Pode repetir, corrigir, buscar mais dados

Age até atingir o objetivo

Em resumo:

Workflow = sequência  
Agente = sistema que age

Classificação do meu FL‑04
Meu pipeline FL‑04 é um workflow, não um agente.

Ele:

segue passos fixos,

não toma decisões,

não escolhe ferramentas,

não usa MCP,

não avalia resultados,

não possui autonomia.

Portanto, tecnicamente, ele é um fluxo de automação linear.

O que o FL‑04 precisaria para virar um agente
Para transformar o FL‑04 em um agente, seriam necessárias quatro mudanças:

Autonomia  
O sistema deveria decidir quando sintetizar, revisar, buscar dados ou refazer etapas.

Ferramentas MCP  
Ele precisaria acessar arquivos, APIs e recursos externos.

Objetivo em vez de passos  
Em vez de “faça A, depois B”, o agente receberia:
“Crie notas de estudo sobre esta fonte.”

Ciclo de ação e avaliação  
Se a síntese estivesse incompleta, o agente deveria refazer.
Se faltasse informação, deveria buscar.
Se o arquivo estivesse incorreto, deveria corrigir.

Com essas mudanças, o FL‑04 se tornaria um agente completo.

As três tarefas MCP realizadas
A designação exige três tarefas que o chat sozinho não conseguiria executar. Todas foram realizadas com o servidor MCP local.

1. Leitura de arquivo local — read_file
O MCP abriu o arquivo:

Código
Semana_04/FluenciaIA/Designações/AgentesMCP/notas.txt
Conteúdo lido com sucesso.
Print registrado.

2. Listagem de diretório — list_directory
O Cursor tentou usar a ferramenta MCP, detectou o servidor e listou a pasta:

Código
Semana_04/FluenciaIA/Designações/AgentesMCP
Resultado exibido e print registrado.

3. Consulta de API real — fetch_api
O Cursor consultou:

Código
https://catfact.ninja/fact
Retornou JSON real com fato sobre gatos.
Print registrado.

Essas três evidências comprovam que o MCP está funcional e que o sistema executou ações externas reais.

Nome do agente
Conforme exigido pela página, nomeei a versão agentiva do meu pipeline:

Agente Fabiano‑Notas‑IA
Conclusão
A designação FL‑05 demonstra a transição entre automações lineares e sistemas agentivos. Ao compreender o papel do MCP, executar ferramentas reais e analisar a diferença entre workflows e agentes, fica claro como o MCP habilita modelos a agir no mundo real. Com as três tarefas concluídas e o texto elaborado, a designação está pronta para submissão.

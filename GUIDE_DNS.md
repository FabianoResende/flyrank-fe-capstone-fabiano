GUIDE_DNS — Meia página explicativa

O que é o DNS e por que ele importa
O DNS (Domain Name System) é como a “agenda telefônica” da internet: traduz nomes legíveis por humanos (por exemplo, fabiano-resende.netlify.app) em endereços IP que os computadores usam para se conectar. Sem DNS, teríamos que digitar números longos para visitar sites; com ele, usamos nomes fáceis de lembrar.

Quem participa do processo
- Resolver (resolvedor DNS): serviço do seu provedor de internet ou de um serviço público (ex.: Cloudflare, Google) que inicia a consulta quando você digita um endereço.
- Servidores de nomes autoritativos: guardam os registros reais do domínio (A, AAAA, CNAME, etc.) e respondem com os dados oficiais.
- Cache: computadores e servidores intermediários guardam respostas por um tempo (TTL) para acelerar acessos futuros.

O que é um registro CNAME
Um CNAME (Canonical Name) aponta um nome de domínio para outro nome de domínio. Por exemplo, se você quer que www.seudominio.com use o conteúdo hospedado em fabiano-resende.netlify.app, cria-se um CNAME de www para fabiano-resende.netlify.app. O CNAME não aponta diretamente para um IP; ele instrui o resolvedor a continuar a consulta usando o nome alvo até obter um registro A/AAAA final.

O que acontece, passo a passo, quando alguém digita um endereço
1. O navegador pergunta ao resolvedor configurado qual é o IP do nome digitado.  
2. Se o resolvedor não tiver a resposta em cache, ele consulta a cadeia de servidores DNS até encontrar o servidor autoritativo.  
3. O servidor autoritativo responde com os registros do domínio. Se houver um CNAME, o resolvedor segue o apontamento até obter um registro A/AAAA com o IP final.  
4. O resolvedor retorna o IP ao navegador.  
5. O navegador abre conexão com o servidor naquele IP; o servidor responde com o site e negocia TLS/HTTPS se estiver configurado.  
6. O usuário vê a página via HTTPS.

Por que isso importa para você
- Entender CNAMEs ajuda a conectar um domínio ao Netlify/Vercel sem confundir registros A.  
- Saber sobre resolvers e cache explica por que mudanças de DNS podem demorar a propagar (TTL).  
- Netlify emite certificados automaticamente na maioria dos casos, por isso o HTTPS aparece sem passos extras.

Nota prática
Para esta tarefa não é necessário comprar um domínio. Use a URL fabiano-resende.netlify.app como entrega. Se no futuro conectar um domínio próprio, crie um CNAME apontando para o host do Netlify (ou siga o guia do provedor) e aguarde a propagação do DNS.


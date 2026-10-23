// capstone/src/app/portfolio/problema/page.tsx
export const metadata = {
    title: 'Problema — Portfólio Fabiano Resende',
    description: 'Descrição do problema real, contexto e dados relevantes.',
  };
  
  export default function ProblemaPage() {
    return (
      <main className="min-h-screen bg-slate-900 text-slate-100 p-6">
        <section className="max-w-3xl mx-auto rounded-lg bg-slate-800/60 p-8 border border-slate-700">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold">O Problema</h1>
            <p className="text-slate-300 mt-2">
              Contextualize o problema real que você recebeu: quem, quando, onde e por que importa.
            </p>
          </header>
  
          <div className="grid gap-6">
            <article className="bg-slate-900/30 p-4 rounded border border-slate-700">
              <h2 className="font-medium text-slate-100">Resumo</h2>
              <p className="text-slate-300 text-sm mt-2">
                Um parágrafo curto com o resumo do problema e o impacto esperado.
              </p>
            </article>
  
            <article className="bg-slate-900/30 p-4 rounded border border-slate-700">
              <h2 className="font-medium text-slate-100">Dados e Evidências</h2>
              <ul className="list-disc list-inside text-slate-300 text-sm mt-2 space-y-1">
                <li>Fonte A — métrica X: valor e interpretação.</li>
                <li>Fonte B — logs, amostras ou observações relevantes.</li>
                <li>Restrições e hipóteses consideradas.</li>
              </ul>
            </article>
  
            <article className="bg-slate-900/30 p-4 rounded border border-slate-700">
              <h2 className="font-medium text-slate-100">Critério de Sucesso</h2>
              <p className="text-slate-300 text-sm mt-2">
                Como saberemos que o problema foi resolvido? Métricas e sinais observáveis.
              </p>
            </article>
  
            <footer className="text-xs text-slate-500">
              <p>
                Nota: mantenha evidências e prints no diretório <code>PROOFS/</code> no repositório para submissão.
              </p>
            </footer>
          </div>
        </section>
      </main>
    );
  }
  
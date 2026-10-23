// capstone/src/app/portfolio/como-eu-penso/page.tsx
export const metadata = {
    title: 'Como Eu Penso — Fabiano Resende',
    description: 'Processo de pensamento: abordagem, trade-offs e decisões.',
  };
  
  export default function ComoEuPensoPage() {
    return (
      <main className="min-h-screen bg-slate-900 text-slate-100 p-6">
        <section className="max-w-4xl mx-auto rounded-lg bg-slate-800/60 p-8 border border-slate-700">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold">Como Eu Penso</h1>
            <p className="text-slate-300 mt-2">
              Explico meu processo: como eu analiso problemas, priorizo hipóteses e tomo decisões.
            </p>
          </header>
  
          <div className="space-y-6 text-sm text-slate-200">
            <article className="bg-slate-900/30 p-4 rounded border border-slate-700">
              <h2 className="font-medium text-slate-100">Princípios</h2>
              <ul className="list-disc list-inside text-slate-300 mt-2 space-y-1">
                <li>Entender o impacto antes de propor solução.</li>
                <li>Priorizar hipóteses testáveis e dados mensuráveis.</li>
                <li>Iterar rápido com feedback real do usuário.</li>
              </ul>
            </article>
  
            <article className="bg-slate-900/30 p-4 rounded border border-slate-700">
              <h2 className="font-medium text-slate-100">Fluxo de trabalho</h2>
              <ol className="list-decimal list-inside text-slate-300 mt-2 space-y-1">
                <li>Coleta de evidências e contexto.</li>
                <li>Formulação de hipóteses e critérios de sucesso.</li>
                <li>Experimentos rápidos e validação.</li>
                <li>Recomendações acionáveis e monitoramento.</li>
              </ol>
            </article>
  
            <article className="bg-slate-900/30 p-4 rounded border border-slate-700">
              <h2 className="font-medium text-slate-100">Trade-offs e decisões</h2>
              <p className="text-slate-300 mt-2">
                Explicito os trade-offs (tempo, custo, risco) e como escolho a solução que maximiza valor com menor risco.
              </p>
            </article>
  
            <footer className="text-xs text-slate-500">
              <p>
                Dica: mantenha exemplos curtos e reais; vincule decisões a métricas sempre que possível.
              </p>
            </footer>
          </div>
        </section>
      </main>
    );
  }
  
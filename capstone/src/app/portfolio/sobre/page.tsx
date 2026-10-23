// capstone/src/app/portfolio/sobre/page.tsx
export const metadata = {
    title: 'Sobre — Fabiano Resende',
    description: 'Quem sou eu, minha experiência e como trabalho.',
  };
  
  export default function SobrePage() {
    return (
      <main className="min-h-screen bg-slate-900 text-slate-100 p-6">
        <section className="max-w-3xl mx-auto rounded-lg bg-slate-800/60 p-8 border border-slate-700">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold">Sobre</h1>
            <p className="text-slate-300 mt-2">
              Sou Fabiano Resende — trabalho com análise prática, engenharia de contexto e soluções acionáveis.
            </p>
          </header>
  
          <div className="space-y-6 text-sm text-slate-200">
            <article className="bg-slate-900/30 p-4 rounded border border-slate-700">
              <h2 className="font-medium text-slate-100">Resumo profissional</h2>
              <p className="text-slate-300 mt-2">
                Experiência em projetos de suporte técnico, automação e integração de IA para fluxos de decisão.
              </p>
            </article>
  
            <article className="bg-slate-900/30 p-4 rounded border border-slate-700">
              <h2 className="font-medium text-slate-100">Habilidades</h2>
              <ul className="list-disc list-inside text-slate-300 mt-2 space-y-1">
                <li>Frontend: Next.js, React, TailwindCSS, TypeScript.</li>
                <li>Engenharia de contexto e prompts para agentes de IA.</li>
                <li>Design de microinterações e acessibilidade.</li>
              </ul>
            </article>
  
            <article className="bg-slate-900/30 p-4 rounded border border-slate-700">
              <h2 className="font-medium text-slate-100">Como trabalho</h2>
              <p className="text-slate-300 mt-2">
                Seção prática: priorizo hipóteses testáveis, entrego recomendações acionáveis e documento evidências.
              </p>
            </article>
  
            <div className="mt-4 flex gap-4">
              <a
                href="/portfolio/cta-final"
                className="inline-block rounded-md bg-orange-400 px-4 py-2 font-medium text-slate-900 hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
              >
                Próximo passo
              </a>
  
              <a
                href="/portfolio"
                className="inline-block text-sm text-slate-300 underline-offset-4 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-600 rounded"
              >
                Voltar ao início
              </a>
            </div>
  
            <footer className="text-xs text-slate-500 mt-6">
              <p>Nota: mantenha provas e prints no diretório <code>PROOFS/</code> para submissão FlyRank.</p>
            </footer>
          </div>
        </section>
      </main>
    );
  }
  
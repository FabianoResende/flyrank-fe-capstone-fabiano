// capstone/src/app/portfolio/estudo-de-caso/page.tsx
export const metadata = {
    title: 'Estudo de Caso — Fabiano Resende',
    description: 'Estudo de caso: problema, decisões e resultado.',
  };
  
  export default function EstudoDeCasoPage() {
    return (
      <main className="min-h-screen bg-slate-900 text-slate-100 p-6">
        <section className="max-w-4xl mx-auto rounded-lg bg-slate-800/60 p-8 border border-slate-700">
          <h1 className="text-2xl font-semibold mb-4">Estudo de Caso</h1>
  
          <p className="text-slate-300 mb-6">
            Aqui apresento um estudo de caso real: problema, análise e recomendações.
          </p>
  
          <article className="space-y-4 text-sm text-slate-200">
            <div>
              <h2 className="font-medium">Problema</h2>
              <p className="text-slate-300">Descreva o problema real que você recebeu.</p>
            </div>
  
            <div>
              <h2 className="font-medium">Abordagem</h2>
              <p className="text-slate-300">Como você analisou as evidências e quais ferramentas usou.</p>
            </div>
  
            <div>
              <h2 className="font-medium">Recomendações</h2>
              <p className="text-slate-300">Recomendações acionáveis e próximos passos.</p>
            </div>
          </article>
        </section>
      </main>
    );
  }
  
// capstone/src/app/portfolio/cta-final/page.tsx
export const metadata = {
    title: 'Próximo Passo — Fabiano Resende',
    description: 'Chamada para ação: envie um problema real ou agende uma conversa.',
  };
  
  export default function CtaFinalPage() {
    return (
      <main className="min-h-screen bg-slate-900 text-slate-100 p-6">
        <section className="max-w-3xl mx-auto rounded-lg bg-slate-800/60 p-8 border border-slate-700 text-center">
          <h1 className="text-2xl sm:text-3xl font-extrabold mb-4">Pronto para transformar evidências em decisão?</h1>
  
          <p className="text-slate-300 mb-6">
            Se você tem um problema real, envie os dados ou agende uma conversa curta. Eu entrego recomendações acionáveis com foco em impacto.
          </p>
  
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
            <a
              href="mailto:seu-email@exemplo.com?subject=Envio%20de%20problema%20real"
              className="inline-flex items-center gap-3 rounded-md px-6 py-3 bg-orange-400 text-slate-900 font-medium shadow-sm hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
              aria-label="Enviar problema por email"
            >
              Enviar problema por email
            </a>
  
            <a
              href="/portfolio"
              className="inline-block text-sm text-slate-300 underline-offset-4 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-600 rounded px-4 py-2"
              aria-label="Voltar ao portfólio"
            >
              Voltar ao portfólio
            </a>
          </div>
  
          <p className="text-xs text-slate-500 mt-6">
            Nota: mantenha evidências no diretório <code>PROOFS/</code> para submissão FlyRank.
          </p>
        </section>
      </main>
    );
  }
  
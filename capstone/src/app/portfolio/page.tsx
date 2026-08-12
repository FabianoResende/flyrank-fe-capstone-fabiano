import CTAButton from './CTAButton';

export const metadata = {
  title: 'Portfólio — Fabiano Resende',
  description: 'Transformo evidências dispersas em recomendações para decisão.',
};

export default function PortfolioHero() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-100">
      <section className="max-w-4xl w-full px-6 py-20">
        <div className="rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-10 backdrop-blur-sm border border-slate-800">
          <header className="space-y-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              Transformo evidências dispersas
              <br />
              <span className="text-orange-400">em recomendações para decisão.</span>
            </h1>

            <p className="text-slate-300 max-w-2xl">
              Trabalho com análise prática e entrega de recomendações acionáveis.
              Se você tem um problema real, envie e eu mostro como transformar evidências em decisão.
            </p>
          </header>

          <div className="mt-8 flex items-center gap-4">
            <CTAButton />
            <a
              href="/portfolio/estudo-de-caso"
              className="inline-block text-sm text-slate-300 underline-offset-4 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-600 rounded"
            >
              Ver estudo de caso
            </a>
          </div>

          <footer className="mt-6 text-xs text-slate-500">
            <span>Microinterações funcionais; acessibilidade e performance priorizadas.</span>
          </footer>
        </div>
      </section>
    </main>
  );
}

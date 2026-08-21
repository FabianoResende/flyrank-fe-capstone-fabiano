import Link from 'next/link';
import CTAButton from './CTAButton';

export const metadata = {
  title: 'Portfólio — Fabiano Resende',
  description: 'Engenharia Front‑end + IA — transformar evidências em recomendações executáveis.',
};

export default function PortfolioHero() {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-100"
      role="main"
      aria-labelledby="portfolio-hero-title"
    >
      <section className="max-w-4xl w-full px-6 py-20">
        <div className="rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-10 backdrop-blur-sm border border-slate-800">
          <header className="space-y-6 text-left">
            <h1
              id="portfolio-hero-title"
              className="text-3xl sm:text-4xl font-extrabold leading-tight"
            >
              Engenharia Front‑end + IA —{' '}
              <span className="text-orange-400">transformar evidências em recomendações executáveis.</span>
            </h1>

            <p className="text-slate-300 max-w-2xl">
              Trabalho com análise prática e entrega de resultados.
              Se você tem um problema real, envie e eu mostrarei como resolver.
            </p>
          </header>

          <div className="mt-8 flex items-center gap-4">
            <CTAButton href="/portfolio/cta-final">Envie um problema real</CTAButton>
            <Link href="/portfolio/estudo-de-caso" aria-label="Ver estudo de caso">
              <span className="inline-block text-sm text-slate-300 underline-offset-4 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-600 rounded px-2 py-1">
                Ver estudo de caso
              </span>
            </Link>
          </div>

          <footer className="mt-6 text-xs text-slate-500">
            <span>Microinterações funcionais; acessibilidade e performance priorizadas.</span>
          </footer>
        </div>
      </section>
    </main>
  );
}

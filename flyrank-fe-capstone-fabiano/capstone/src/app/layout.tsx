import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plataforma de Suporte Técnico com IA",
  description: "Capstone FE-04 - Suporte Técnico com IA - Fabiano Resende",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur">
          <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
            <span className="font-semibold">
              Suporte Técnico com IA · Capstone FE-04
            </span>
            <nav className="flex gap-4 text-sm">
              <a href="/" className="hover:text-cyan-300">Início</a>
              <a href="/tickets" className="hover:text-cyan-300">Tickets</a>
              <a href="/diagnostico" className="hover:text-cyan-300">Diagnóstico IA</a>
              <a href="/ocorrencias" className="hover:text-cyan-300">Ocorrências</a>
              <a href="/health" className="hover:text-cyan-300">Health Check</a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-6">{children}</main>
      </body>
    </html>
  );
}

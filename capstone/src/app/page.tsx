export default function HomePage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">
        Plataforma de Suporte Técnico com IA
      </h1>

      <p className="text-sm text-slate-300">
        Esqueleto do capstone FE-04: rotas, layout raiz, navegação e páginas provisórias.
      </p>

      <ul className="mt-4 space-y-2 text-sm">
        <li>• /tickets — lista e criação de tickets</li>
        <li>• /diagnostico — análise assistida por IA</li>
        <li>• /ocorrencias — registro de ocorrências operacionais</li>
        <li>• /health — página de verificação de saúde</li>
      </ul>
    </section>
  );
}

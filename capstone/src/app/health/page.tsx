export default function HealthPage() {
  const now = new Date().toISOString();

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Health Check</h2>
      <p className="text-sm text-slate-300">
        Página de verificação de saúde do app.
      </p>

      <div className="rounded border border-emerald-700 bg-emerald-900/40 p-4 text-sm">
        <p>Status: OK</p>
        <p>Timestamp: {now}</p>
      </div>
    </section>
  );
}

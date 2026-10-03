import React from "react";

export default function LeadScoreResultCard({ output, onBack }: { output: { score: number; category: string; reasons: string[] }; onBack: () => void }) {
  return (
    <div style={{ border: "1px solid #e5e7eb", padding: 20, borderRadius: 8 }}>
      <h3 style={{ marginTop: 0 }}>Result</h3>
      <div style={{ fontSize: 24, fontWeight: 600 }}>{output.score} <span style={{ fontSize: 14, fontWeight: 400, marginLeft: 8 }}>{output.category}</span></div>
      <ul>
        {output.reasons.map((r, i) => <li key={i}>{r}</li>)}
      </ul>
      <div style={{ marginTop: 12 }}>
        <button onClick={onBack} style={{ padding: "8px 12px" }}>Run again</button>
      </div>
    </div>
  );
}

import React from "react";

export default function LeadScoreErrorCard({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <div style={{ border: "1px solid #fee2e2", background: "#fff7f7", padding: 20, borderRadius: 8 }}>
      <h3 style={{ marginTop: 0, color: "#b91c1c" }}>Error</h3>
      <div style={{ marginBottom: 12 }}>{message}</div>
      <div>
        <button onClick={onRetry} style={{ padding: "8px 12px" }}>Back</button>
      </div>
    </div>
  );
}

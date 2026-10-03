import React from "react";

export default function LeadScoreLoadingCard() {
  return (
    <div style={{ border: "1px solid #e5e7eb", padding: 20, borderRadius: 8, textAlign: "center" }}>
      <div role="status" aria-live="polite" style={{ marginBottom: 8 }}>Running tool…</div>
      <div style={{ height: 8, background: "#f3f4f6", borderRadius: 4, overflow: "hidden" }}>
        <div style={{ width: "40%", height: "100%", background: "#60a5fa", transition: "width 400ms ease" }} />
      </div>
    </div>
  );
}

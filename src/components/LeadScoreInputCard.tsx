import React, { useState } from "react";

export default function LeadScoreInputCard({ onRun }: { onRun: (payload: { name: string; email: string; message?: string }) => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onRun({ name: name.trim(), email: email.trim(), message: message.trim() || undefined });
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Lead score form" style={{ border: "1px solid #e5e7eb", padding: 20, borderRadius: 8 }}>
      <h2 style={{ margin: "0 0 12px" }}>Run Lead Score Tool</h2>
      <label style={{ display: "block", marginBottom: 8 }}>
        <div style={{ fontSize: 13 }}>Name</div>
        <input required value={name} onChange={e => setName(e.target.value)} style={{ width: "100%", padding: 8 }} />
      </label>
      <label style={{ display: "block", marginBottom: 8 }}>
        <div style={{ fontSize: 13 }}>Email</div>
        <input required type="email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: "100%", padding: 8 }} />
      </label>
      <label style={{ display: "block", marginBottom: 12 }}>
        <div style={{ fontSize: 13 }}>Message</div>
        <textarea value={message} onChange={e => setMessage(e.target.value)} style={{ width: "100%", padding: 8 }} rows={3} />
      </label>
      <div style={{ display: "flex", gap: 8 }}>
        <button type="submit" style={{ padding: "8px 12px" }}>Run</button>
        <button type="button" onClick={() => { setName(""); setEmail(""); setMessage(""); }} style={{ padding: "8px 12px" }}>Clear</button>
      </div>
    </form>
  );
}

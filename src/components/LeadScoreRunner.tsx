import React, { useState } from "react";
import LeadScoreInputCard from "./LeadScoreInputCard";
import LeadScoreLoadingCard from "./LeadScoreLoadingCard";
import LeadScoreResultCard from "./LeadScoreResultCard";
import LeadScoreErrorCard from "./LeadScoreErrorCard";

type InputShape = { name: string; email: string; message?: string };
type OutputShape = { score: number; category: "cold" | "warm" | "hot"; reasons: string[] };

export default function LeadScoreRunner() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [input, setInput] = useState<InputShape | null>(null);
  const [output, setOutput] = useState<OutputShape | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function runTool(payload: InputShape) {
    setInput(payload);
    setState("loading");
    setErrorMsg(null);
    setOutput(null);

    try {
      const res = await fetch("/api/tools/lead-score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data?.error ?? "Unknown error");
        setState("error");
        return;
      }

      // Basic runtime validation
      if (typeof data.score !== "number" || !data.category || !Array.isArray(data.reasons)) {
        setErrorMsg("Invalid tool response shape");
        setState("error");
        return;
      }

      setOutput(data as OutputShape);
      setState("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : String(err));
      setState("error");
    }
  }

  return (
    <div style={{ maxWidth: 720, margin: "24px auto", fontFamily: "system-ui, Arial" }}>
      {state === "idle" && <LeadScoreInputCard onRun={runTool} />}
      {state === "loading" && <LeadScoreLoadingCard />}
      {state === "success" && output && <LeadScoreResultCard output={output} onBack={() => setState("idle")} />}
      {state === "error" && <LeadScoreErrorCard message={errorMsg ?? "Erro desconhecido"} onRetry={() => setState("idle")} />}
    </div>
  );
}

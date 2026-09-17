import type { NextApiRequest, NextApiResponse } from "next";
import { LeadScoreInput, LeadScoreOutput } from "../../../server/tools/leadScoreTool";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const parsed = LeadScoreInput.parse(req.body);
    const base = parsed.name.length * 2 + (parsed.message?.length || 0);
    const score = Math.min(100, Math.floor(base));
    const category = score > 70 ? "hot" : score > 40 ? "warm" : "cold";
    const reasons = [`name length: ${parsed.name.length}`, `message length: ${parsed.message?.length ?? 0}`];
    const output = { score, category, reasons };
    LeadScoreOutput.parse(output);
    return res.status(200).json(output);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Invalid request";
    return res.status(400).json({ error: message });
  }
}

import { z } from "zod";

export const LeadScoreInput = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().optional(),
});

export const LeadScoreOutput = z.object({
  score: z.number().min(0).max(100),
  category: z.enum(["cold","warm","hot"]),
  reasons: z.array(z.string()),
});

export type LeadScoreInputType = z.infer<typeof LeadScoreInput>;
export type LeadScoreOutputType = z.infer<typeof LeadScoreOutput>;

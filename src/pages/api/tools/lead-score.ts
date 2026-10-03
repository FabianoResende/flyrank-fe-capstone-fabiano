import rateLimit from "express-rate-limit";
import type { NextApiRequest, NextApiResponse } from "next";

const limiter = rateLimit({
  windowMs: 60_000, // 1 minuto
  max: 30, // 30 requisições por IP por minuto
});

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await runMiddleware(req, res, limiter);
  // ... restante da lógica (Zod, cálculo, retorno)
}

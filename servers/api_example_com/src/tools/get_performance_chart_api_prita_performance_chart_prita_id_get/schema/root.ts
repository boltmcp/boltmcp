import { z } from "zod"

export const inputParamsSchema = {
  "prita_id": z.string(),
  "days": z.number().int().gte(1).lte(30).optional(),
  "authorization": z.string()
}
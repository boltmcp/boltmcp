import { z } from "zod"

export const inputParamsSchema = {
  "prita_id": z.string(),
  "page": z.number().int().optional(),
  "limit": z.number().int().optional(),
  "authorization": z.string()
}
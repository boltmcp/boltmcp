import { z } from "zod"

export const inputParamsSchema = {
  "chila_id": z.string(),
  "page": z.number().int().optional(),
  "limit": z.number().int().optional(),
  "authorization": z.string()
}
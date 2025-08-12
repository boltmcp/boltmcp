import { z } from "zod"

export const inputParamsSchema = {
  "category": z.string().optional(),
  "search": z.string().optional(),
  "min_price": z.number().optional(),
  "max_price": z.number().optional()
}
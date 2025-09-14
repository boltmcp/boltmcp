import { z } from "zod"

export const inputParamsSchema = {
  "chila_id": z.string(),
  "page": z.number().int().optional(),
  "limit": z.number().int().optional(),
  "customer_number": z.union([z.string(), z.null()]).optional(),
  "authorization": z.string()
}
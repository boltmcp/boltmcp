import { z } from "zod"

export const inputParamsSchema = {
  "search": z.string().optional(),
  "page": z.string().optional(),
  "limit": z.string().optional()
}
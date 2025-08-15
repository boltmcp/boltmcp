import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().optional(),
  "perPage": z.number().int().nullable().optional()
}
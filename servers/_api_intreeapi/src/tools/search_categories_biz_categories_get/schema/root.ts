import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().gt(0).lte(100).optional(),
  "token": z.union([z.string(), z.null()]).optional(),
  "name": z.union([z.string(), z.null()]).optional()
}
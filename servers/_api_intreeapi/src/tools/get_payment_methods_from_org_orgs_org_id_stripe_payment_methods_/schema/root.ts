import { z } from "zod"

export const inputParamsSchema = {
  "org_id": z.string(),
  "limit": z.number().int().gt(0).lte(100).optional(),
  "token": z.union([z.string(), z.null()]).optional()
}
import { z } from "zod"

export const inputParamsSchema = {
  "domain_id": z.string().uuid(),
  "token": z.string(),
  "tag": z.union([z.string(), z.null()]).optional()
}
import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "appriseUrl": z.union([z.string(), z.null()]).optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
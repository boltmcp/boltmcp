import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "householdsWithTool": z.array(z.string()).optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
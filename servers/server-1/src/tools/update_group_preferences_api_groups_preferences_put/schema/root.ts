import { z } from "zod"

export const inputParamsSchema = {
  "privateGroup": z.boolean().optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
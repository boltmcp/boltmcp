import { z } from "zod"

export const inputParamsSchema = {
  "recipes": z.array(z.string()),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
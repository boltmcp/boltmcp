import { z } from "zod"

export const inputParamsSchema = {
  "translateLanguage": z.union([z.string(), z.null()]).optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
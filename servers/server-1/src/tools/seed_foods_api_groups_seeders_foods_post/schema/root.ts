import { z } from "zod"

export const inputParamsSchema = {
  "locale": z.string(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
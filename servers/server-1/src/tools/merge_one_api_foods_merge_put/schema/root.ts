import { z } from "zod"

export const inputParamsSchema = {
  "fromFood": z.string(),
  "toFood": z.string(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
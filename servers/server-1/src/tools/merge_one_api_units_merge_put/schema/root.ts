import { z } from "zod"

export const inputParamsSchema = {
  "fromUnit": z.string(),
  "toUnit": z.string(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
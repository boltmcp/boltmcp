import { z } from "zod"

export const inputParamsSchema = {
  "email": z.string(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
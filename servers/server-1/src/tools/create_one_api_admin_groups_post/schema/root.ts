import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().min(1),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
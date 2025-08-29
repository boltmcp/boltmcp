import { z } from "zod"

export const inputParamsSchema = {
  "accept-language": z.union([z.string(), z.null()]).optional()
}
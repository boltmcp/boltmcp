import { z } from "zod"

export const inputParamsSchema = {
  "path": z.string(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
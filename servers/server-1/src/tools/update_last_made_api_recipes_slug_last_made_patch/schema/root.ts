import { z } from "zod"

export const inputParamsSchema = {
  "slug": z.string(),
  "timestamp": z.string().datetime({ offset: true }),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
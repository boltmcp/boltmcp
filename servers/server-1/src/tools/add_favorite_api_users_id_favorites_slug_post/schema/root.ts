import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "slug": z.string(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
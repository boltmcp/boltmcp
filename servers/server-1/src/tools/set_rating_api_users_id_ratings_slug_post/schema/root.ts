import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "slug": z.string(),
  "rating": z.union([z.number(), z.null()]).optional(),
  "isFavorite": z.union([z.boolean(), z.null()]).optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
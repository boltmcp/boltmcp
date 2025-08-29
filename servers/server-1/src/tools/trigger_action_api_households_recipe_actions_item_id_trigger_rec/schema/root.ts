import { z } from "zod"

export const inputParamsSchema = {
  "item_id": z.string(),
  "recipe_slug": z.string(),
  "scaled_amount": z.number().optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
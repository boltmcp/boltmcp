import { z } from "zod"

export const inputParamsSchema = {
  "item_id": z.string(),
  "name": z.string(),
  "description": z.string().optional(),
  "slug": z.union([z.string(), z.null()]).optional(),
  "position": z.number().int().optional(),
  "public": z.boolean().optional(),
  "queryFilterString": z.string().optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
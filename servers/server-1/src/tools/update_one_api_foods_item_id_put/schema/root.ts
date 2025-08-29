import { z } from "zod"

export const inputParamsSchema = {
  "item_id": z.string(),
  "id": z.union([z.string(), z.null()]).optional(),
  "name": z.string(),
  "pluralName": z.union([z.string(), z.null()]).optional(),
  "description": z.string().optional(),
  "extras": z.union([z.record(z.any()), z.null()]).optional(),
  "labelId": z.union([z.string(), z.null()]).optional(),
  "aliases": z.array(z.object({ "name": z.string() })).optional(),
  "householdsWithIngredientFood": z.array(z.string()).optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
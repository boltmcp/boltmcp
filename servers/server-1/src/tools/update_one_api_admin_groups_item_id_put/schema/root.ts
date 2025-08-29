import { z } from "zod"

export const inputParamsSchema = {
  "item_id": z.string(),
  "id": z.string(),
  "name": z.string(),
  "preferences": z.union([z.object({ "privateGroup": z.boolean() }), z.null()]).optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
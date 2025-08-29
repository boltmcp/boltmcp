import { z } from "zod"

export const inputParamsSchema = {
  "item_id": z.union([z.string(), z.string()]),
  "group_slug": z.string(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
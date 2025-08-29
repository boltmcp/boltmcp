import { z } from "zod"

export const inputParamsSchema = {
  "item_id": z.string(),
  "id": z.string(),
  "text": z.string(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
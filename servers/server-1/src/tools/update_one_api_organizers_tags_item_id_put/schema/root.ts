import { z } from "zod"

export const inputParamsSchema = {
  "item_id": z.string(),
  "name": z.string(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
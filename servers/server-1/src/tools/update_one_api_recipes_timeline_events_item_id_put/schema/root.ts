import { z } from "zod"

export const inputParamsSchema = {
  "item_id": z.string(),
  "subject": z.string(),
  "eventMessage": z.union([z.string(), z.null()]).optional(),
  "image": z.union([z.enum(["has image","does not have image"]), z.null()]).optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
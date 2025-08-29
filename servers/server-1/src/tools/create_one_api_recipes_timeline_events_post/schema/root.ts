import { z } from "zod"

export const inputParamsSchema = {
  "recipeId": z.string(),
  "userId": z.union([z.string(), z.null()]).optional(),
  "subject": z.string(),
  "eventType": z.enum(["system","info","comment"]),
  "eventMessage": z.union([z.string(), z.null()]).optional(),
  "image": z.union([z.enum(["has image","does not have image"]), z.null()]).optional(),
  "timestamp": z.string().datetime({ offset: true }).optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
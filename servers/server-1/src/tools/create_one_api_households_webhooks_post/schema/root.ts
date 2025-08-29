import { z } from "zod"

export const inputParamsSchema = {
  "enabled": z.boolean().optional(),
  "name": z.string().optional(),
  "url": z.string().optional(),
  "webhookType": z.literal("mealplan").optional(),
  "scheduledTime": z.string().time(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
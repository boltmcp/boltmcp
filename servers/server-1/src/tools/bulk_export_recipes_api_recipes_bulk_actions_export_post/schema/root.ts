import { z } from "zod"

export const inputParamsSchema = {
  "recipes": z.array(z.string()),
  "exportType": z.literal("json").optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
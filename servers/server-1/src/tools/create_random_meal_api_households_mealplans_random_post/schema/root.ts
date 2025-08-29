import { z } from "zod"

export const inputParamsSchema = {
  "date": z.string().date(),
  "entryType": z.enum(["breakfast","lunch","dinner","side"]).optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
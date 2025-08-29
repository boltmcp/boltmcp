import { z } from "zod"

export const inputParamsSchema = {
  "actionType": z.enum(["link","post"]),
  "title": z.string(),
  "url": z.string(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
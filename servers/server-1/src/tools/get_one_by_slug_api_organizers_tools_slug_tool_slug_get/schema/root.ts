import { z } from "zod"

export const inputParamsSchema = {
  "tool_slug": z.string(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
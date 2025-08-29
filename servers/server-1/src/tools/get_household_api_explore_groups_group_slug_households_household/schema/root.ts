import { z } from "zod"

export const inputParamsSchema = {
  "household_slug": z.string(),
  "group_slug": z.string(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
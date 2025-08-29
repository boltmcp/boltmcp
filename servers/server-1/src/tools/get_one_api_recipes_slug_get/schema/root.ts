import { z } from "zod"

export const inputParamsSchema = {
  "slug": z.string().describe("A recipe's slug or id"),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
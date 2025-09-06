import { z } from "zod"

export const inputParamsSchema = {
  "query": z.union([z.string(), z.null()]).describe("Query to be included in the email.").optional()
}
import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().describe("The page to retrieve.").optional(),
  "perPage": z.number().int().nullable().describe("The number of super statutory rates per page.").optional()
}
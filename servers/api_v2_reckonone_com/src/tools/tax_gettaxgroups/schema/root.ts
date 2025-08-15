import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "effectiveDate": z.string().datetime({ offset: true }).describe("The effective date for the tax rates."),
  "page": z.number().int().describe("The page to retrieve.").optional(),
  "perPage": z.number().int().nullable().describe("The number of groups per page.").optional()
}
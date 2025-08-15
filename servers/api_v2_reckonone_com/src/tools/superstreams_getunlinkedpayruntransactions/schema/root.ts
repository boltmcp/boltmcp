import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "fromDate": z.string().datetime({ offset: true }).describe("The date range start.").optional(),
  "toDate": z.string().datetime({ offset: true }).describe("The date range end.").optional(),
  "page": z.number().int().describe("The page to retrieve.").optional(),
  "perPage": z.number().int().nullable().describe("The number of unlinked super transactions per page.").optional()
}
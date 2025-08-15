import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "baseDate": z.string().datetime({ offset: true }).nullable().describe("The base date to use when checking for overdue bills.").optional()
}
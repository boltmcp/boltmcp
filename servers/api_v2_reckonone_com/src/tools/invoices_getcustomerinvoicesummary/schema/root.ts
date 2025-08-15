import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "customerId": z.string().describe("The customer id to filter on."),
  "baseDate": z.string().datetime({ offset: true }).nullable().describe("The base date to use when checking for overdue invoices.").optional()
}
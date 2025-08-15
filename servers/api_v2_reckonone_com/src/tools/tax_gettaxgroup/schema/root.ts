import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "taxGroupId": z.string().describe("The tax group's id."),
  "effectiveDate": z.string().datetime({ offset: true }).describe("The effective date for the tax rates.")
}
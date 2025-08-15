import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "taxRateId": z.string().describe("The tax rate's id."),
  "effectiveDate": z.string().datetime({ offset: true }).describe("The effective date for the tax rate.")
}
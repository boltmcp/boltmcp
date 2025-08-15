import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "expenseClaimId": z.string().describe("The expense claim's id."),
  "lineItemId": z.string().describe("The id of the line item to delete.")
}
import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "expenseClaimId": z.string().describe("The expense claim's id."),
  "lineItemId": z.string().describe("The id of the line item to attach the document(s) to."),
  "fileName": z.string().nullable().describe("The name of the file when passing a single document in the body of the request.").optional()
}
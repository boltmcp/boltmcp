import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "billId": z.string().describe("The bill's id."),
  "lineItemId": z.string().describe("The id of the line item to delete.")
}
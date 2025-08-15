import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "estimateId": z.string().describe("The estimate's id."),
  "lineItemId": z.string().describe("The line item's id.")
}
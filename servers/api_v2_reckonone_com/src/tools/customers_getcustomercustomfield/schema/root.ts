import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "customerId": z.string().describe("The customer's id."),
  "type": z.string().describe("The custom field's type by name or id.")
}
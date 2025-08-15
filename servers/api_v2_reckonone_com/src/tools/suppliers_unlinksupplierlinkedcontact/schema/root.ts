import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "supplierId": z.string().describe("The supplier's id."),
  "contactId": z.string().describe("The supplier's linked contact's id.")
}
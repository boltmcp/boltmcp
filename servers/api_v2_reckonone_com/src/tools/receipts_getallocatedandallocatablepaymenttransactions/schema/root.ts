import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "entityId": z.string().describe("The entity's id."),
  "receiptId": z.string().nullable().describe("The optional receipt id.")
}
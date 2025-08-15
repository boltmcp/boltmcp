import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "billId": z.string().describe("The bill's id."),
  "linkId": z.string().describe("The id of the transaction link to delete.")
}
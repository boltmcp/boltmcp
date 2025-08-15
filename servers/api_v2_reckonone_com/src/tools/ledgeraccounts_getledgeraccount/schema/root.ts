import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "accountId": z.string().describe("The ledger account's id.")
}
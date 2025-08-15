import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "paymentIds": z.array(z.string()).nullable().describe("The list of payment ids.").optional()
}
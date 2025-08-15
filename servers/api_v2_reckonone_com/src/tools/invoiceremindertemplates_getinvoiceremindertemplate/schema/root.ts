import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The unique identifier of the book."),
  "templateId": z.string().describe("The unique identifier of the invoice reminder template.")
}
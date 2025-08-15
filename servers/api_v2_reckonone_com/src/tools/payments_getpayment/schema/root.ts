import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "paymentId": z.string().describe("The payments id."),
  "format": z.string().nullable().describe("The format to use, e.g. pdf.").optional()
}
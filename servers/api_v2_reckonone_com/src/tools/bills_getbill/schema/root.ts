import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "billId": z.string().describe("The bill's id."),
  "format": z.string().nullable().describe("The format to use, e.g. pdf.").optional()
}
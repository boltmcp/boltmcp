import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "estimateId": z.string().describe("The estimate's id."),
  "format": z.string().nullable().describe("The format to use, e.g. pdf.").optional()
}
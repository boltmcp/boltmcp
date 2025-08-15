import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book id."),
  "payrunId": z.string().describe("The payrun id."),
  "ignoreWarnings": z.boolean().nullable().describe("When true, warning validations will be skipped.").optional()
}
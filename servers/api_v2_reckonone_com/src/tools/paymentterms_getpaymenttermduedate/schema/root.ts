import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "termId": z.string().describe("The term's id."),
  "baseDate": z.string().datetime({ offset: true }).describe("A base date")
}
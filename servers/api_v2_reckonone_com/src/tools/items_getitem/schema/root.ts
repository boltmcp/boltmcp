import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "itemId": z.string().describe("The item's id."),
  "baseDate": z.string().datetime({ offset: true }).nullable().describe("The date to use when calculating the net or gross price.").optional()
}
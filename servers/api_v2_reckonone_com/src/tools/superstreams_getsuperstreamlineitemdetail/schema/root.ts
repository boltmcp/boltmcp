import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "superStreamId": z.string().describe("The superstream's id."),
  "payrunSuperLineId": z.string().describe("The superstream's line item id.")
}
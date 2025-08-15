import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "superstreamId": z.string().describe("The superstreams's id."),
  "payrunSuperLineId": z.string().nullable().describe("The id of the payrun that the line item relates to.").optional()
}
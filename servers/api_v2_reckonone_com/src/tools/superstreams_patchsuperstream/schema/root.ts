import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "superstreamId": z.string().describe("The superstream's id."),
  "fromDate": z.string().datetime({ offset: true }).nullable().describe("The date range start").optional(),
  "toDate": z.string().datetime({ offset: true }).nullable().describe("The date range end. ").optional(),
  "description": z.string().max(100).nullable().describe("The description.").optional(),
  "status": z.enum(["Draft","Lodged"]).nullable().describe("The status of the superstream.").optional()
}
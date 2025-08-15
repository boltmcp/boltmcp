import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "fromDate": z.string().datetime({ offset: true }).min(1).describe("The date range start. "),
  "toDate": z.string().datetime({ offset: true }).min(1).describe("The date range end. "),
  "description": z.string().max(100).nullable().describe("The description.").optional(),
  "lineItems": z.array(z.object({ "payrunSuperLineId": z.string().nullable().describe("The id of the payrun that the line item relates to.") }).strict().describe("A superstream line item.")).nullable().describe("The individual items that make up the superstream.").optional()
}
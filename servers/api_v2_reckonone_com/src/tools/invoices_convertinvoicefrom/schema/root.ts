import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "ignoreWarnings": z.boolean().describe("Ignore warnings").optional(),
  "id": z.string().min(1).describe("The Id of the object that needs to be converted into an invoice."),
  "type": z.literal("Estimate").describe("Types of an invoice to create from, which can be an estimate, sales order and etc.").describe("The types of the object that needs to be converted into an invoice, the object can be an estimate, sales order and etc.")
}
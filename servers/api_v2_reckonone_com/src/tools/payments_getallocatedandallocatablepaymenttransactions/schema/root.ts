import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "entityId": z.string().describe("The entity's id."),
  "payableType": z.string().describe("The payable type."),
  "paymentId": z.string().nullable()
}
import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "electronicAddressTypeId": z.string().describe("The electronic address type's id.")
}
import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "superfundProviderId": z.string().describe("The super fund provider's id.")
}
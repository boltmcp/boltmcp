import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "selectedProvider": z.enum(["None","Beam"]).describe("Superstream providers.").describe("Superstream provider.").optional()
}
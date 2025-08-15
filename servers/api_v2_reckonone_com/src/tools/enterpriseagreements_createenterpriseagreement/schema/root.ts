import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "name": z.string().nullable().describe("The name of the enterprise agreement.").optional(),
  "classifications": z.array(z.object({ "name": z.string().nullable().describe("The name of the classification within an enterprise agreement.").optional() }).strict().describe("Details of a classification within an enterprise agreement.")).nullable().describe("List of classifications.").optional()
}
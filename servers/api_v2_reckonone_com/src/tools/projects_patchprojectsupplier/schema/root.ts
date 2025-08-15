import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "projectId": z.string().describe("The project's id."),
  "lineId": z.string().describe("The project suppliers's id."),
  "supplier": z.string().nullable().describe("The id or name of the suplier.").optional()
}
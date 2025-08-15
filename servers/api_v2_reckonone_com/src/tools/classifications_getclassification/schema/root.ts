import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "classificationId": z.string().describe("The classification's id.")
}
import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "payTemplateId": z.string().describe("The pay template's id.")
}
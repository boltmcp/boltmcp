import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "roleId": z.number().int().describe("The role's id.")
}
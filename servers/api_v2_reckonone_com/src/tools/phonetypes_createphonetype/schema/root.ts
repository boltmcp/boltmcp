import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "name": z.string().min(1).max(25).describe("The type's name."),
  "description": z.string().max(100).nullable().describe("The type's description.").optional(),
  "status": z.enum(["Inactive","Active"]).describe("Type status.").nullable().describe("The type's status.").optional()
}
import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "addressTypeId": z.string().describe("The address type's id."),
  "name": z.string().nullable().describe("The type's name.").optional(),
  "description": z.string().nullable().describe("The type's description.").optional(),
  "status": z.enum(["Inactive","Active"]).describe("Type status.").nullable().describe("The type's status.").optional()
}
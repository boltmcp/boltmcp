import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "userId": z.string().describe("The user's id or portal id."),
  "roles": z.array(z.object({ "id": z.number().int().describe("Unique identifier for role ").optional() }).strict().describe("A user role id")).nullable().describe("A list of roles the user is assigned to.").optional()
}
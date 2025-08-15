import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "contactId": z.string().describe("The contact's id."),
  "name": z.string().max(100).nullable().describe("The contact's display name.").optional(),
  "salutation": z.string().max(100).nullable().describe("The salutation to use in communications.").optional(),
  "department": z.string().max(100).nullable().describe("The contact's department.").optional(),
  "position": z.string().max(100).nullable().describe("The contact's position.").optional(),
  "organisation": z.string().nullable().describe("The id or name of the organisation that the contact is associated with.").optional(),
  "status": z.enum(["Active","Inactive"]).describe("The status of a contact.").nullable().describe("The contact's status.").optional(),
  "notes": z.string().max(1000).nullable().describe("Notes for the contact.").optional()
}
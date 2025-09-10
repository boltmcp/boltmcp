import { z } from "zod"

export const inputParamsSchema = {
  "importType": z.enum(["Learner","Applicant","Organisation"]).describe("The import type").optional(),
  "fields": z.array(z.object({ "fieldName": z.string().nullable().describe("Field name").optional(), "fieldValue": z.string().nullable().describe("Fields value").optional() }).strict().describe("Represents a view model for a single field to be added via an import")).nullable().describe("List of field names and values").optional()
}
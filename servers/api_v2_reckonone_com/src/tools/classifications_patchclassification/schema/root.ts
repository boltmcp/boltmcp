import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "classificationId": z.string().describe("The classification's id."),
  "ExternalResourceId": z.string().nullable().describe("The external resource's id.").optional(),
  "ExternalClientId": z.string().describe("The external client application's id.").optional(),
  "ExternalTenancyId": z.string().nullable().describe("The external book/file/tenancy/etc's id.").optional(),
  "name": z.string().nullable().describe("The classification's name.").optional(),
  "description": z.string().nullable().describe("The classification's description.").optional(),
  "status": z.enum(["Inactive","Active"]).describe("Classification status").nullable().describe("Active/Inactive status of the classification.").optional(),
  "isDefault": z.boolean().nullable().describe("Whether the classification is the default for the transaction.").optional(),
  "parentClassification": z.string().nullable().describe("The parent classification if there is one.").optional()
}
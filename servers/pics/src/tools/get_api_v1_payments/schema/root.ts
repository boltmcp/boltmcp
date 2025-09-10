import { z } from "zod"

export const inputParamsSchema = {
  "learnerIdent": z.string().describe("Learner Ident of payments to be found").optional(),
  "organisationCode": z.string().describe("Organisation code of payments to be found").optional(),
  "reference": z.string().describe("Reference of payments to be found, including Reference, PO Number, or Invoice Number").optional(),
  "status": z.array(z.string()).describe("List of Statuses of payments to be found").optional(),
  "sortDirection": z.enum(["Assending","Descending"]).describe("Sort Direction").optional(),
  "pageNumber": z.number().int().describe("Page Number").optional(),
  "pageSize": z.number().int().gte(5).lte(1000).describe("Page Size").optional()
}
import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "page": z.number().int().describe("The page to retrieve.").optional(),
  "perPage": z.number().int().nullable().describe("The number of suppliers per page.").optional(),
  "ExternalClientId": z.string().describe("The external client application's id.").optional(),
  "ExternalTenancyId": z.string().nullable().describe("The external book/file/tenancy/etc's id.").optional()
}
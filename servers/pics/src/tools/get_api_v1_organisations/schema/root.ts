import { z } from "zod"

export const inputParamsSchema = {
  "additionalID": z.array(z.string()).describe("Additional Portfolio ID for the Organisation to be found").optional(),
  "status": z.array(z.string()).describe("Status of the Organisation to be found").optional(),
  "name": z.array(z.string()).describe("Name of the Organisation to be found").optional(),
  "postcode": z.array(z.string()).describe("Postcode of the Organisation to be found").optional(),
  "site": z.string().describe("Search for employers by site").optional(),
  "tag": z.array(z.string()).describe("Search for Organisations by tag").optional(),
  "createdSince": z.string().datetime({ offset: true }).describe("Search for Organisations created after the given date").optional(),
  "updatedSince": z.string().datetime({ offset: true }).describe("Search for Organisations modified after the given date").optional(),
  "sortDirection": z.enum(["Assending","Descending"]).describe("Sort Direction").optional(),
  "pageNumber": z.number().int().describe("Page Number").optional(),
  "pageSize": z.number().int().gte(5).lte(1000).describe("Page Size").optional()
}
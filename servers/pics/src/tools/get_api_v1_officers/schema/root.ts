import { z } from "zod"

export const inputParamsSchema = {
  "firstNames": z.string().describe("Search for Officer by forename").optional(),
  "surname": z.string().describe("Search for Officer by surname").optional(),
  "sex": z.string().describe("Search for Officer by sex").optional(),
  "postcode": z.string().describe("Search for Officer by postcode").optional(),
  "email": z.string().describe("Search for Officer by email").optional(),
  "role": z.array(z.string()).describe("Search for Officer by role").optional(),
  "jobTitle": z.array(z.string()).describe("Search for Officer by job title").optional(),
  "mainOrganisation": z.string().describe("Search for Officer by main organisation").optional(),
  "superiorOfficer": z.string().describe("Search for Officer by superior officer").optional(),
  "site": z.string().describe("Search for Officers by site").optional(),
  "status": z.array(z.string()).describe("Search for Officers by system status").optional(),
  "tag": z.array(z.string()).describe("Search for Officers by tag").optional(),
  "createdSince": z.string().datetime({ offset: true }).describe("Search for Officers created since a given date").optional(),
  "modifiedSince": z.string().datetime({ offset: true }).describe("Search for Officers modified since a given date").optional(),
  "sortBy": z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]).describe("Control the sorting of the results using one of the following: Title, Forename, Surname, Sex, Postcode, Email, Type, JobTitle, MainOrg").optional(),
  "sortDirection": z.enum(["Assending","Descending"]).describe("Sort Direction").optional(),
  "pageNumber": z.number().int().describe("Page Number").optional(),
  "pageSize": z.number().int().gte(5).lte(1000).describe("Page Size").optional()
}
import { z } from "zod"

export const inputParamsSchema = {
  "from": z.string().datetime({ offset: true }).describe("Creation time inclusive lower bound in UTC [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) Date Time format YYYY-MM-DDThh:mm:ssZ").optional(),
  "to": z.string().datetime({ offset: true }).describe("Creation time exclusive upper bound in UTC [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) Date Time format YYYY-MM-DDThh:mm:ssZ").optional(),
  "limit": z.number().int().describe("Maximum number of items").optional()
}
import { z } from "zod"

export const inputParamsSchema = {
  "id": z.union([z.string(), z.null()]).optional(),
  "name": z.string(),
  "pluralName": z.union([z.string(), z.null()]).optional(),
  "description": z.string().optional(),
  "extras": z.union([z.record(z.any()), z.null()]).optional(),
  "fraction": z.boolean().optional(),
  "abbreviation": z.string().optional(),
  "pluralAbbreviation": z.union([z.string(), z.null()]).optional(),
  "useAbbreviation": z.boolean().optional(),
  "aliases": z.array(z.object({ "name": z.string() })).optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
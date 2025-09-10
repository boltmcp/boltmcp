import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The Learner's ID"),
  "items": z.array(z.object({ "relationshipID": z.string().nullable().describe("Officer's relationship ID").optional(), "relationshipType": z.string().nullable().describe("Officer's relationship type").optional(), "relationshipTitle": z.string().nullable().describe("Officer's relationship title").optional(), "officer": z.string().nullable().describe("Officer's code").optional() }).strict().describe("Represents a view model item for an officer entity relationship")).nullable().describe("List of officer items").optional()
}
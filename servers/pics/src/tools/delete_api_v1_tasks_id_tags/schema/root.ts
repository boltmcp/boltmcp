import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Id of the Task to delete Tags from"),
  "items": z.array(z.object({ "id": z.string().nullable().describe("Tag ID").optional(), "description": z.string().nullable().describe("Tag Description").optional() }).strict()).nullable().describe("List of Tag items").optional()
}
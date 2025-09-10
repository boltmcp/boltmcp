import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Id of the Learner to delete Tags from"),
  "items": z.array(z.object({ "id": z.string().nullable().describe("Tag ID").optional(), "description": z.string().nullable().describe("Tag Description").optional() }).strict()).nullable().describe("List of Tag items").optional()
}
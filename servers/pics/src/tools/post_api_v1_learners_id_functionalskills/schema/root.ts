import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The Learner's ID"),
  "type": z.string().min(1).max(1).describe("Functional Skills assessment type code"),
  "subject": z.string().min(1).max(1).describe("Functional Skills assessment subject code"),
  "level": z.string().min(1).max(3).describe("Functional Skills assessment level code"),
  "date": z.string().datetime({ offset: true }).describe("Functional Skills assessment date"),
  "result": z.number().gte(0).lte(100).nullable().describe("Functional Skills assessment result").optional()
}
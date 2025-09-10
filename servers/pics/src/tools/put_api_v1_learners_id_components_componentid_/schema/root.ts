import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The Learner's ID"),
  "componentId": z.string().describe("The learner component ID to be edited"),
  "b_id": z.string().min(1).describe("Component ID"),
  "start": z.string().datetime({ offset: true }).nullable().describe("Start Date").optional(),
  "priorityFlag": z.number().int().nullable().describe("Priority Flag").optional(),
  "due": z.string().datetime({ offset: true }).nullable().describe("Due Date").optional(),
  "done": z.string().datetime({ offset: true }).nullable().describe("Done Date").optional(),
  "notes": z.string().nullable().describe("Notes").optional(),
  "linkId": z.string().nullable().describe("Used to link a task to a component").optional()
}
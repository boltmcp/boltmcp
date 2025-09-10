import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The Learner's ID"),
  "componentID": z.string().min(1).describe("Component ID")
}
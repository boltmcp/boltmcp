import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The Learner's ID"),
  "componentId": z.string().describe("The ID of the component to be removed from the Learner")
}
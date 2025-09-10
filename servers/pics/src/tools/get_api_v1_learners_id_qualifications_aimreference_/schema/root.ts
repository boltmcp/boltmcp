import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The Learner's id"),
  "aimReference": z.string().describe("The Qualification's Aim Reference")
}
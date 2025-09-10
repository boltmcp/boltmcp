import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The Applicant's ID"),
  "assessmentId": z.string().describe("The ID of the assessment to be deleted")
}
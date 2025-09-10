import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The Learner's ID"),
  "udfApiCodes": z.array(z.string()).describe("The unique codes for the User Defined questions").optional()
}
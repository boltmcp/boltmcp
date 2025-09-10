import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The Task's ID"),
  "udfApiCodes": z.array(z.string()).describe("The unique codes for the User Defined questions").optional()
}
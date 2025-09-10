import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The Appointment's ID"),
  "udfApiCodes": z.array(z.string()).describe("The unique codes for the User Defined questions").optional()
}
import { z } from "zod"

export const inputParamsSchema = {
  "templateID": z.string().describe("The ID of the template to be used"),
  "forID": z.string().describe("The ID of the entity the appointment is being create for")
}
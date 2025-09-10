import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The Appointment's ID"),
  "attachmentId": z.string().describe("The appointment attachment's 32-character ID")
}
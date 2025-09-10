import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The task's ID"),
  "attachmentId": z.string().describe("The task attachment's 32-character ID")
}
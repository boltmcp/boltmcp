import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "participantId": z.string().describe("The participant Id.")
}
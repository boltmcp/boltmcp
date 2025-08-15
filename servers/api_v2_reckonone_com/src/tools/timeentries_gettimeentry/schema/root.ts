import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "timeEntryId": z.string().describe("The time entry's id.")
}
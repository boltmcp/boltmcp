import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "superstreamId": z.string().describe("The superstream's id.")
}
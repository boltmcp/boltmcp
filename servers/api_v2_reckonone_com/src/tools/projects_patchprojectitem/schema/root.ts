import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "projectId": z.string().describe("The project's id."),
  "lineId": z.string().describe("The project item's id."),
  "item": z.string().nullable().describe("The id or name of the item.").optional(),
  "projectRate": z.number().nullable().describe("Rate at which item is charged for this project.").optional()
}
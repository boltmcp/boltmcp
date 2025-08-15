import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book id."),
  "paytemplateId": z.string().describe("The paytemplate id to be deleted.")
}
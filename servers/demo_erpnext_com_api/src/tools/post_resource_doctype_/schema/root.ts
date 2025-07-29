import { z } from "zod"

export const inputParamsSchema = {
  "DocType": z.string().describe("The DocType you'd like to receive. For example, Customer.\n")
}
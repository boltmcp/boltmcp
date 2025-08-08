import { z } from "zod"

export const inputParamsSchema = {
  "pretty": z.boolean().describe("If true, return pretty JSON. Default is false.").optional()
}
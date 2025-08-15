import { z } from "zod"

export const inputParamsSchema = {
  "basedate": z.string().datetime({ offset: true }).nullable().describe("A base date.").optional()
}
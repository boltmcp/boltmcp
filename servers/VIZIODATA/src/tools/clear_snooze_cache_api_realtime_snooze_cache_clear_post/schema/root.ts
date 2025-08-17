import { z } from "zod"

export const inputParamsSchema = {
  "clear_expired_only": z.boolean().describe("Clear only expired entries").optional()
}
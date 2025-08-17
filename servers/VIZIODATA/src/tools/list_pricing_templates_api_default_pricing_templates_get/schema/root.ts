import { z } from "zod"

export const inputParamsSchema = {
  "active_only": z.boolean().describe("Show only active templates").optional()
}
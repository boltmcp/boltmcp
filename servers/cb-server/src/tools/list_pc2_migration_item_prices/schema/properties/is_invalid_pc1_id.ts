import { z } from "zod"

export const inputParamsSchema = {
  "is": z.enum(["true","false"]).optional()
}
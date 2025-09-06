import { z } from "zod"

export const inputParamsSchema = {
  "salt": z.string(),
  "error_if_expired": z.boolean().optional()
}
import { z } from "zod"

export const inputParamsSchema = {
  "key": z.string().optional(),
  "val": z.string().optional()
}
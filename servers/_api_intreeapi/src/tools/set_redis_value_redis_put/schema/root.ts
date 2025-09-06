import { z } from "zod"

export const inputParamsSchema = {
  "key": z.string(),
  "value": z.union([z.string(), z.null()])
}
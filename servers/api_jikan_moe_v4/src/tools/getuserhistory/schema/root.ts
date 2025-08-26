import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string(),
  "type": z.enum(["anime","manga"]).optional()
}
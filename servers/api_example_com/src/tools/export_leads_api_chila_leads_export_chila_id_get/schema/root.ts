import { z } from "zod"

export const inputParamsSchema = {
  "chila_id": z.string(),
  "authorization": z.string()
}
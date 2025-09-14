import { z } from "zod"

export const inputParamsSchema = {
  "bot_id": z.string(),
  "plan": z.string(),
  "authorization": z.string()
}
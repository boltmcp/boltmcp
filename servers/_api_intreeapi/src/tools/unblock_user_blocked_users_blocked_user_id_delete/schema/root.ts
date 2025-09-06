import { z } from "zod"

export const inputParamsSchema = {
  "blocked_user_id": z.string().uuid()
}
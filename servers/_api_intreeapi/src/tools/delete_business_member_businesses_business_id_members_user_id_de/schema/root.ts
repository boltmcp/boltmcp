import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "user_id": z.string().uuid()
}
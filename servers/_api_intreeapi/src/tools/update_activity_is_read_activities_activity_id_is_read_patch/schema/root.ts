import { z } from "zod"

export const inputParamsSchema = {
  "activity_id": z.string().uuid(),
  "is_read": z.boolean()
}
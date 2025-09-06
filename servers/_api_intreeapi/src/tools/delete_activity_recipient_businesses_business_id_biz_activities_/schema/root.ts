import { z } from "zod"

export const inputParamsSchema = {
  "activity_id": z.string().uuid(),
  "business_id": z.string().uuid()
}
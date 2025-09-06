import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "content": z.string().max(2000),
  "thread_id": z.string().uuid()
}
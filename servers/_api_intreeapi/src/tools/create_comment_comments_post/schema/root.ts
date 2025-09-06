import { z } from "zod"

export const inputParamsSchema = {
  "content": z.string().max(2000),
  "thread_id": z.string().uuid()
}
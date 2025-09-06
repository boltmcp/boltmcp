import { z } from "zod"

export const inputParamsSchema = {
  "thread_id": z.string().uuid()
}
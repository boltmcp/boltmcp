import { z } from "zod"

export const inputParamsSchema = {
  "comment_id": z.string().uuid(),
  "content": z.string().max(2000)
}
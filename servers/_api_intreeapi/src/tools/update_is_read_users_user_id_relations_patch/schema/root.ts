import { z } from "zod"

export const inputParamsSchema = {
  "user_id": z.string().uuid(),
  "is_read": z.boolean().describe("\n            New is_read value, which will be set on either\n            is_read1 or is_read2, depending on which user is making the request.\n        ")
}
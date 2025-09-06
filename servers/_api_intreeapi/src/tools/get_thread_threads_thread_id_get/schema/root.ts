import { z } from "zod"

export const inputParamsSchema = {
  "thread_id": z.string().uuid(),
  "check_post_access": z.boolean().describe("If true, give 403 if user does not have access to post thread was made in.").optional()
}
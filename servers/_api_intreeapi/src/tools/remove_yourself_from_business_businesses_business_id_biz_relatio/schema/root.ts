import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "delete_posts": z.boolean().describe("If true, delete all posts created by this user in this biz.").optional()
}
import { z } from "zod"

export const inputParamsSchema = {
  "post_id": z.string().uuid(),
  "comment": z.union([z.object({ "content": z.string().max(2000) }).strict().describe("DTO facing client for creating a new comment."), z.null()]).describe("Initial comment.").optional()
}
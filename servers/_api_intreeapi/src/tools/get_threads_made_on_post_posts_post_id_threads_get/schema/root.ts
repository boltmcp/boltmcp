import { z } from "zod"

export const inputParamsSchema = {
  "post_id": z.string().uuid(),
  "limit": z.number().int().gt(0).lte(100).optional(),
  "token": z.union([z.string(), z.null()]).optional(),
  "embed_recent_comment": z.boolean().describe("This will be the same as initial_comment if there are no other comments to the thread.").optional(),
  "embed_initial_comment": z.boolean().optional(),
  "embed_number_of_comments": z.boolean().optional(),
  "embed_author": z.boolean().optional(),
  "id": z.union([z.string().uuid(), z.null()]).describe("Filter by thread id.").optional()
}
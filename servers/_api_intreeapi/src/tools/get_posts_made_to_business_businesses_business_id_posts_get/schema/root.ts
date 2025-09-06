import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "sort_by": z.enum(["desc(created_at)","asc(created_at)"]).describe("Sort biz posts.\n\n- `created_at`: sort by when post was created").optional(),
  "limit": z.number().int().gt(0).lte(100).optional(),
  "token": z.union([z.string(), z.null()]).optional(),
  "id": z.union([z.string().uuid(), z.null()]).optional(),
  "author_id": z.union([z.string().uuid(), z.null()]).describe("Filter by author id. If set will only return posts that are made by the user.").optional(),
  "get_scheduled": z.boolean().describe("If true will only return scheduled posts. If false will only get released posts.").optional(),
  "embed_post_author": z.boolean().optional(),
  "embed_post_gallery": z.boolean().optional(),
  "embed_comment_info": z.boolean().optional(),
  "embed_biz_relation": z.boolean().optional()
}
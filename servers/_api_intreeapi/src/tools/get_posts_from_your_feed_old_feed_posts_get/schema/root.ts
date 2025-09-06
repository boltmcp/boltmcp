import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().gt(0).lte(20).optional(),
  "token": z.union([z.string(), z.null()]).describe("base64 encoded datetime").optional(),
  "embed_author": z.boolean().optional(),
  "embed_gallery": z.boolean().optional(),
  "embed_aspects": z.boolean().optional(),
  "embed_business": z.boolean().optional(),
  "embed_recent_comment": z.boolean().optional(),
  "embed_state": z.boolean().optional(),
  "id": z.union([z.string().uuid(), z.null()]).optional(),
  "author_id": z.union([z.string().uuid(), z.null()]).optional(),
  "aspect_id": z.union([z.string().uuid(), z.null()]).optional(),
  "business_id": z.union([z.string().uuid(), z.null()]).describe("Filter by business id. If set will only return posts that are in the business. Using this filter is the only way to embed the `BizRelation` of the post author(s).").optional(),
  "aspect_member_feed_preference": z.union([z.literal("preferred"), z.null()]).optional(),
  "state": z.union([z.enum(["hidden","saved"]).describe("A user's preference of a post.\n\n`hidden`: the post will be hidden in the feed, can be gotten with\n`GET /feed/posts?state=hidden`\n\n`saved`: unused"), z.null()]).describe("Filter by post state. 'saved' returns only saved posts. 'hidden' returns only hidden posts. If not set will hide hidden posts.").optional(),
  "post_type": z.union([z.enum(["biz","aspect"]).describe("The type of a post.\n\n`biz`: a post made to a biz\n\n`aspect`: a post made to an aspect"), z.null()]).describe("Filter by post type. 'biz' returns only posts made to a business. 'aspect' returns only posts made to an aspect. If not set will return both types.").optional()
}
import { z } from "zod"

export const inputParamsSchema = {
  "sort_by": z.enum(["asc(created_at)","desc(created_at)","asc(username)","desc(username)","asc(full_name)","desc(full_name)"]).describe("Sort by me contacts.\n\n- `created_at`: when the user got in relation.\n- `username`: username of contact.\n- `full_name`: full name of contact.\n\nNote that when not sorting by full_name, desc(created_at) is used as\ntiebreaker.").optional(),
  "limit": z.number().int().gt(0).lte(100).optional(),
  "token": z.union([z.string(), z.null()]).optional(),
  "embed_avatar_image": z.boolean().optional(),
  "embed_cover_image": z.boolean().optional(),
  "id": z.union([z.string().uuid(), z.null()]).describe("Filter by user id.").optional(),
  "relation_id": z.union([z.string().uuid(), z.null()]).describe("Filter by relation id.").optional(),
  "search": z.union([z.string().min(1).max(100), z.null()]).describe("Search string for full name of contact.").optional()
}
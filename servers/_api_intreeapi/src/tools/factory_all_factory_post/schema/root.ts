import { z } from "zod"

export const inputParamsSchema = {
  "total_users": z.number().int().optional(),
  "aspects_per_user": z.number().int().optional(),
  "relations_per_user": z.number().int().optional(),
  "create_avatar_images": z.boolean().optional(),
  "create_cover_images": z.boolean().optional()
}
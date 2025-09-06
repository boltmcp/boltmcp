import { z } from "zod"

export const inputParamsSchema = {
  "aspect_id": z.string().uuid(),
  "website_url": z.union([z.string(), z.null()]).optional(),
  "phone": z.union([z.string().max(255), z.null()]).optional(),
  "video_url": z.union([z.string().max(2047), z.null()]).optional(),
  "email": z.union([z.string().email(), z.null()]).optional(),
  "description": z.union([z.string().max(4095), z.null()]).optional(),
  "icon_image_id": z.union([z.string().uuid(), z.null()]).optional(),
  "cover_image_id": z.union([z.string().uuid(), z.null()]).optional(),
  "tags": z.union([z.string(), z.null()]).optional(),
  "title": z.union([z.string().min(1).max(255), z.null()]).optional(),
  "use_profile_image": z.union([z.boolean(), z.null()]).optional()
}
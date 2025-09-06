import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "website_url": z.union([z.string(), z.null()]).optional(),
  "phone": z.union([z.string().max(255), z.null()]).optional(),
  "video_url": z.union([z.string().max(2047), z.null()]).optional(),
  "email": z.union([z.string().email(), z.null()]).optional(),
  "title": z.union([z.string().min(1).max(255).describe("Title of the business profile."), z.null()]).optional(),
  "logo_image_id": z.union([z.string().uuid(), z.null()]).optional(),
  "cover_image_id": z.union([z.string().uuid(), z.null()]).optional(),
  "description": z.union([z.string().max(600).describe("Description of the business profile."), z.null()]).optional(),
  "address": z.union([z.string().max(255).describe("Address of the business profile."), z.null()]).optional()
}
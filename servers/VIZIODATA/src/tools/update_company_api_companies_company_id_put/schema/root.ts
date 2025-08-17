import { z } from "zod"

export const inputParamsSchema = {
  "company_id": z.string(),
  "name": z.union([z.string(), z.null()]).optional(),
  "cnpj": z.union([z.string(), z.null()]).optional(),
  "address": z.union([z.string(), z.null()]).optional(),
  "active": z.union([z.boolean(), z.null()]).optional(),
  "hidden": z.union([z.boolean(), z.null()]).optional(),
  "timezone": z.union([z.string(), z.null()]).optional(),
  "logo_url": z.union([z.string(), z.null()]).optional(),
  "primary_color": z.union([z.string(), z.null()]).optional(),
  "secondary_color": z.union([z.string(), z.null()]).optional(),
  "accent_color": z.union([z.string(), z.null()]).optional(),
  "background_color": z.union([z.string(), z.null()]).optional(),
  "text_color": z.union([z.string(), z.null()]).optional(),
  "sidebar_color": z.union([z.string(), z.null()]).optional()
}
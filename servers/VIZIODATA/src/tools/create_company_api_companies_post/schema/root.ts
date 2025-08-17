import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "cnpj": z.string(),
  "address": z.string(),
  "active": z.boolean().optional(),
  "hidden": z.boolean().optional(),
  "timezone": z.union([z.string(), z.null()]).optional(),
  "logo_url": z.union([z.string(), z.null()]).optional(),
  "primary_color": z.union([z.string().regex(new RegExp("^#[0-9A-Fa-f]{6}$")), z.null()]).optional(),
  "secondary_color": z.union([z.string().regex(new RegExp("^#[0-9A-Fa-f]{6}$")), z.null()]).optional(),
  "accent_color": z.union([z.string().regex(new RegExp("^#[0-9A-Fa-f]{6}$")), z.null()]).optional(),
  "background_color": z.union([z.string().regex(new RegExp("^#[0-9A-Fa-f]{6}$")), z.null()]).optional(),
  "text_color": z.union([z.string().regex(new RegExp("^#[0-9A-Fa-f]{6}$")), z.null()]).optional(),
  "sidebar_color": z.union([z.string().regex(new RegExp("^#[0-9A-Fa-f]{6}$")), z.null()]).optional()
}
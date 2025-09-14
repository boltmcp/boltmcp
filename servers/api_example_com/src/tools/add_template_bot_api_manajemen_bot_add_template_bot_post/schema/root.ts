import { z } from "zod"

export const inputParamsSchema = {
  "bot_name": z.string(),
  "bot_role": z.string(),
  "bot_description": z.string(),
  "image_src": z.string(),
  "activation_fee": z.number(),
  "monthly_fee": z.number(),
  "tersedia": z.boolean(),
  "bot_type": z.string(),
  "plan": z.string(),
  "alur_kerja_1": z.union([z.string(), z.null()]).optional(),
  "deskripsi_alur_kerja_1": z.union([z.string(), z.null()]).optional(),
  "alur_kerja_2": z.union([z.string(), z.null()]).optional(),
  "deskripsi_alur_kerja_2": z.union([z.string(), z.null()]).optional(),
  "alur_kerja_3": z.union([z.string(), z.null()]).optional(),
  "deskripsi_alur_kerja_3": z.union([z.string(), z.null()]).optional(),
  "alur_kerja_4": z.union([z.string(), z.null()]).optional(),
  "deskripsi_alur_kerja_4": z.union([z.string(), z.null()]).optional(),
  "alur_kerja_5": z.union([z.string(), z.null()]).optional(),
  "deskripsi_alur_kerja_5": z.union([z.string(), z.null()]).optional(),
  "authorization": z.string()
}
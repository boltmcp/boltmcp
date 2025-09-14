import { z } from "zod"

export const inputParamsSchema = {
  "bot_id": z.string(),
  "bot_name": z.union([z.string(), z.null()]).optional(),
  "bot_role": z.union([z.string(), z.null()]).optional(),
  "bot_description": z.union([z.string(), z.null()]).optional(),
  "image_src": z.union([z.string(), z.null()]).optional(),
  "activation_fee": z.union([z.number(), z.null()]).optional(),
  "monthly_fee": z.union([z.number(), z.null()]).optional(),
  "tersedia": z.union([z.boolean(), z.null()]).optional(),
  "bot_type": z.union([z.string(), z.null()]).optional(),
  "plan": z.union([z.string(), z.null()]).optional(),
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
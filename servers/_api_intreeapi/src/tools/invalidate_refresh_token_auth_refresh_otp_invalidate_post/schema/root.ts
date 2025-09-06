import { z } from "zod"

export const inputParamsSchema = {
  "dev_access_expiry_minutes": z.union([z.number().int(), z.null()]).optional(),
  "dev_refresh_expiry_minutes": z.union([z.number().int(), z.null()]).optional(),
  "refresh_token": z.string()
}
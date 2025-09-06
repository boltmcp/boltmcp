import { z } from "zod"

export const inputParamsSchema = {
  "require_handshake": z.boolean().describe("If true, then old refresh tokens will not be invalidated.").optional(),
  "dev_access_expiry_minutes": z.union([z.number().int(), z.null()]).optional(),
  "dev_refresh_expiry_minutes": z.union([z.number().int(), z.null()]).optional(),
  "refresh_token": z.string()
}
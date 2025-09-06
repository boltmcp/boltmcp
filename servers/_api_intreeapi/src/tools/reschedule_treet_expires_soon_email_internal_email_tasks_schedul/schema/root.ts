import { z } from "zod"

export const inputParamsSchema = {
  "valid_from": z.string().datetime({ offset: true }),
  "expires_at": z.string().datetime({ offset: true }),
  "treet_id": z.string().uuid()
}
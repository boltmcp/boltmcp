import { z } from "zod"

export const inputParamsSchema = {
  "pack_id": z.string().uuid(),
  "treet_ids": z.array(z.string().uuid()).max(3)
}
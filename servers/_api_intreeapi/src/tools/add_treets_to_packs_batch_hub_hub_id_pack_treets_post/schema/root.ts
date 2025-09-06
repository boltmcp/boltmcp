import { z } from "zod"

export const inputParamsSchema = {
  "hub_id": z.string().uuid(),
  "treet_ids": z.array(z.string().uuid()).min(1).max(100),
  "pack_ids": z.array(z.string().uuid()).min(1).max(100)
}
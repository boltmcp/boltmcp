import { z } from "zod"

export const inputParamsSchema = {
  "hub_id": z.string().uuid(),
  "hub_name": z.string(),
  "pack_id": z.string().uuid(),
  "recipient_ids": z.array(z.string().uuid())
}
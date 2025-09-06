import { z } from "zod"

export const inputParamsSchema = {
  "hub_id": z.string().uuid(),
  "pack_ids": z.array(z.string().uuid())
}
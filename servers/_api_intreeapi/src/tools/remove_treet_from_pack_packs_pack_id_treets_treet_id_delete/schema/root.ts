import { z } from "zod"

export const inputParamsSchema = {
  "pack_id": z.string().uuid(),
  "treet_id": z.string().uuid()
}
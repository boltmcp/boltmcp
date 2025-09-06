import { z } from "zod"

export const inputParamsSchema = {
  "invite_id": z.string().uuid()
}
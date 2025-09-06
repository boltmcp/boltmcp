import { z } from "zod"

export const inputParamsSchema = {
  "treet_id": z.string().uuid(),
  "invite_link_id": z.string().uuid()
}
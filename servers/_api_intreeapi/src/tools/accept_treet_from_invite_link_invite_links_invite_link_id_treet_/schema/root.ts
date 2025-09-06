import { z } from "zod"

export const inputParamsSchema = {
  "invite_link_id": z.string().uuid()
}
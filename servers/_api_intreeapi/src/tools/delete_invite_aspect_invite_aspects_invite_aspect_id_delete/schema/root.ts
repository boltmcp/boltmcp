import { z } from "zod"

export const inputParamsSchema = {
  "invite_aspect_id": z.string().uuid()
}
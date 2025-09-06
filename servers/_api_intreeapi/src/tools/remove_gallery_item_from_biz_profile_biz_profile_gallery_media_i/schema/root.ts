import { z } from "zod"

export const inputParamsSchema = {
  "media_id": z.string().uuid()
}
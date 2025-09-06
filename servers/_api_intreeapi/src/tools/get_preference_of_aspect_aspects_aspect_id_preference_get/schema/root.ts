import { z } from "zod"

export const inputParamsSchema = {
  "aspect_id": z.string().uuid()
}
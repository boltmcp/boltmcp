import { z } from "zod"

export const inputParamsSchema = {
  "window_id": z.string().uuid()
}
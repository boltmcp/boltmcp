import { z } from "zod"

export const inputParamsSchema = {
  "treet_id": z.string().uuid()
}
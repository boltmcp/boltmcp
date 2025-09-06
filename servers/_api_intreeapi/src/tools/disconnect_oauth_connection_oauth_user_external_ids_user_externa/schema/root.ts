import { z } from "zod"

export const inputParamsSchema = {
  "user_external_id_id": z.string().uuid()
}
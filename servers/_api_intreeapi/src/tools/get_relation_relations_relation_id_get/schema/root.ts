import { z } from "zod"

export const inputParamsSchema = {
  "relation_id": z.string().uuid()
}
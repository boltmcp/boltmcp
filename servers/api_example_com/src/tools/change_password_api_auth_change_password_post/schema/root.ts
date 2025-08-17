import { z } from "zod"

export const inputParamsSchema = {
  "current_password": z.string(),
  "new_password": z.string()
}
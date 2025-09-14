import { z } from "zod"

export const inputParamsSchema = {
  "email": z.string().email(),
  "redirect_to": z.string()
}
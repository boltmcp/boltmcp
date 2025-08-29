import { z } from "zod"

export const inputParamsSchema = {
  "token": z.string(),
  "email": z.string(),
  "password": z.string(),
  "passwordConfirm": z.string()
}
import { z } from "zod"

export const inputParamsSchema = {
  "password": z.string(),
  "token": z.string(),
  "refreshToken": z.string()
}
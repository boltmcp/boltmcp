import { z } from "zod"

export const inputParamsSchema = {
  "usr": z.string().describe("Your username").optional(),
  "pwd": z.string().describe("Your password").optional(),
  "b_usr": z.string().optional(),
  "b_pwd": z.string().optional()
}
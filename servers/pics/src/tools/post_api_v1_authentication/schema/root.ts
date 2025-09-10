import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string().nullable().describe("Username").optional(),
  "password": z.string().nullable().describe("Password").optional()
}
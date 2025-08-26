import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().optional(),
  "limit": z.number().int().optional(),
  "q": z.string().optional(),
  "gender": z.enum(["any","male","female","nonbinary"]).describe("Users Search Query Gender.").optional(),
  "location": z.string().optional(),
  "maxAge": z.number().int().optional(),
  "minAge": z.number().int().optional()
}
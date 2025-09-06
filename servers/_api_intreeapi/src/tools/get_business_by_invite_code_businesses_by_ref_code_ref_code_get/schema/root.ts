import { z } from "zod"

export const inputParamsSchema = {
  "ref_code": z.string().min(6).max(6).describe("The invite code of the business.")
}
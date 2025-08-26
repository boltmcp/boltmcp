import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string(),
  "status": z.enum(["all","reading","completed","onhold","dropped","plantoread"]).describe("User's anime list status filter options").optional()
}
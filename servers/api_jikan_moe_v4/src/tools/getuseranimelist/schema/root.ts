import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string(),
  "status": z.enum(["all","watching","completed","onhold","dropped","plantowatch"]).describe("User's anime list status filter options").optional()
}
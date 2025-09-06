import { z } from "zod"

export const inputParamsSchema = {
  "amount_of_users": z.number().int().describe("Amount of users you want to create.").optional(),
  "is_in_relation": z.boolean().describe("Whether to create a connection between all users created.").optional()
}
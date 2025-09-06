import { z } from "zod"

export const inputParamsSchema = {
  "phone_numbers": z.array(z.string()).describe("The phone numbers of the users. This will generate content for each phone number given"),
  "num_relations": z.union([z.number().int(), z.null()]).describe("The number of relations to create for each user. ").optional()
}
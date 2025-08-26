import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().optional(),
  "type": z.enum(["anime","manga"]).describe("The type of reviews to filter by. Defaults to anime.").optional(),
  "preliminary": z.boolean().describe("Whether the results include preliminary reviews or not. Defaults to true.").optional(),
  "spoilers": z.boolean().describe("Whether the results include reviews with spoilers or not. Defaults to true.").optional()
}
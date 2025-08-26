import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().optional(),
  "limit": z.number().int().optional(),
  "q": z.string().optional(),
  "order_by": z.enum(["mal_id","name","favorites"]).describe("Available Character order_by properties").optional(),
  "sort": z.enum(["desc","asc"]).describe("Search query sort direction").optional(),
  "letter": z.string().describe("Return entries starting with the given letter").optional()
}
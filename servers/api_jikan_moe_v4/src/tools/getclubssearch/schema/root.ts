import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().optional(),
  "limit": z.number().int().optional(),
  "q": z.string().optional(),
  "type": z.enum(["public","private","secret"]).describe("Club Search Query Type").optional(),
  "category": z.enum(["anime","manga","actors_and_artists","characters","cities_and_neighborhoods","companies","conventions","games","japan","music","other","schools"]).describe("Club Search Query Category").optional(),
  "order_by": z.enum(["mal_id","name","members_count","created"]).describe("Club Search Query OrderBy").optional(),
  "sort": z.enum(["desc","asc"]).describe("Search query sort direction").optional(),
  "letter": z.string().describe("Return entries starting with the given letter").optional()
}
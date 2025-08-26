import { z } from "zod"

export const inputParamsSchema = {
  "type": z.enum(["tv","movie","ova","special","ona","music","cm","pv","tv_special"]).describe("Available Anime types").optional(),
  "filter": z.enum(["airing","upcoming","bypopularity","favorite"]).describe("Top items filter types").optional(),
  "rating": z.enum(["g","pg","pg13","r17","r","rx"]).describe("Available Anime audience ratings<br><br><b>Ratings</b><br><ul><li>G - All Ages</li><li>PG - Children</li><li>PG-13 - Teens 13 or older</li><li>R - 17+ (violence & profanity)</li><li>R+ - Mild Nudity</li><li>Rx - Hentai</li></ul>").optional(),
  "sfw": z.boolean().describe("Filter out Adult entries").optional(),
  "page": z.number().int().optional(),
  "limit": z.number().int().optional()
}
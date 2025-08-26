import { z } from "zod"

export const inputParamsSchema = {
  "filter": z.enum(["tv","movie","ova","special","ona","music"]).describe("Entry types").optional(),
  "sfw": z.boolean().describe("'Safe For Work'. This is a flag. When supplied it will filter out entries according to the SFW Policy. You do not need to pass a value to it. e.g usage: `?sfw`").optional(),
  "unapproved": z.boolean().describe("This is a flag. When supplied it will include entries which are unapproved. Unapproved entries on MyAnimeList are those that are user submitted and have not yet been approved by MAL to show up on other pages. They will have their own specifc pages and are often removed resulting in a 404 error. You do not need to pass a value to it. e.g usage: `?unapproved`").optional(),
  "continuing": z.boolean().describe("This is a flag. When supplied it will include entries which are continuing from previous seasons. MAL includes these items on the seasons view in the &#8243;TV (continuing)&#8243; section. (Example: https://myanimelist.net/anime/season/2024/winter) <br />Example usage: `?continuing`").optional(),
  "page": z.number().int().optional(),
  "limit": z.number().int().optional()
}
import { z } from "zod"

export const inputParamsSchema = {
  "unapproved": z.boolean().describe("This is a flag. When supplied it will include entries which are unapproved. Unapproved entries on MyAnimeList are those that are user submitted and have not yet been approved by MAL to show up on other pages. They will have their own specifc pages and are often removed resulting in a 404 error. You do not need to pass a value to it. e.g usage: `?unapproved`").optional(),
  "page": z.number().int().optional(),
  "limit": z.number().int().optional(),
  "q": z.string().optional(),
  "type": z.enum(["manga","novel","lightnovel","oneshot","doujin","manhwa","manhua"]).describe("Available Manga types").optional(),
  "score": z.number().optional(),
  "min_score": z.number().describe("Set a minimum score for results.").optional(),
  "max_score": z.number().describe("Set a maximum score for results").optional(),
  "status": z.enum(["publishing","complete","hiatus","discontinued","upcoming"]).describe("Available Manga statuses").optional(),
  "sfw": z.boolean().describe("Filter out Adult entries").optional(),
  "genres": z.string().describe("Filter by genre(s) IDs. Can pass multiple with a comma as a delimiter. e.g 1,2,3").optional(),
  "genres_exclude": z.string().describe("Exclude genre(s) IDs. Can pass multiple with a comma as a delimiter. e.g 1,2,3").optional(),
  "order_by": z.enum(["mal_id","title","start_date","end_date","chapters","volumes","score","scored_by","rank","popularity","members","favorites"]).describe("Available Manga order_by properties").optional(),
  "sort": z.enum(["desc","asc"]).describe("Search query sort direction").optional(),
  "letter": z.string().describe("Return entries starting with the given letter").optional(),
  "magazines": z.string().describe("Filter by magazine(s) IDs. Can pass multiple with a comma as a delimiter. e.g 1,2,3").optional(),
  "start_date": z.string().describe("Filter by starting date. Format: YYYY-MM-DD. e.g `2022`, `2005-05`, `2005-01-01`").optional(),
  "end_date": z.string().describe("Filter by ending date. Format: YYYY-MM-DD. e.g `2022`, `2005-05`, `2005-01-01`").optional()
}
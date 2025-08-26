import { z } from "zod"

export const inputParamsSchema = {
  "filter": z.enum(["monday","tuesday","wednesday","thursday","friday","saturday","sunday","unknown","other"]).describe("Filter by day").optional(),
  "kids": z.enum(["true","false"]).describe("When supplied, it will filter entries with the `Kids` Genre Demographic. When supplied as `kids=true`, it will return only Kid entries and when supplied as `kids=false`, it will filter out any Kid entries. Defaults to `false`.").optional(),
  "sfw": z.enum(["true","false"]).describe("'Safe For Work'. When supplied, it will filter entries with the `Hentai` Genre. When supplied as `sfw=true`, it will return only SFW entries and when supplied as `sfw=false`, it will filter out any Hentai entries. Defaults to `false`.").optional(),
  "unapproved": z.boolean().describe("This is a flag. When supplied it will include entries which are unapproved. Unapproved entries on MyAnimeList are those that are user submitted and have not yet been approved by MAL to show up on other pages. They will have their own specifc pages and are often removed resulting in a 404 error. You do not need to pass a value to it. e.g usage: `?unapproved`").optional(),
  "page": z.number().int().optional(),
  "limit": z.number().int().optional()
}
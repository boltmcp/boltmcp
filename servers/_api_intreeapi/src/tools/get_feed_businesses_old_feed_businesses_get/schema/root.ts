import { z } from "zod"

export const inputParamsSchema = {
  "sort_by": z.enum(["asc(joined_at)","desc(joined_at)","asc(web_domain)","desc(web_domain)","asc(title)","desc(title)","asc(total_members)","desc(total_members)"]).describe("Sort by feed businesses.\n\n- `joined_at`: when the user joined the business.\n- `web_domain`: the domain of the business.\n- `title`: the title of the business profile.\n- `total_members`: the total number of members in the business.\n\nNote that when not sorting by web_domain, asc(web_domain) is used as tiebreaker.\n\nWhen sorting on total_members, then businesses that have enable_members=false will\nbe placed last no matter the orientation.").optional(),
  "limit": z.number().int().gt(0).lte(100).optional(),
  "token": z.union([z.string(), z.null()]).optional(),
  "id": z.union([z.string().uuid(), z.null()]).optional(),
  "web_domain": z.union([z.string().describe("Community handle. Only alphanumeric characters and `æ, ø, å, Æ, Ø, Å` are allowed: `a-z` `A-Z`, `0-9`, `æ, ø, å, Æ, Ø, Å`. "), z.null()]).describe("Filters the businesses based on their web domain. This takes precedence over the `id` and `only_show_owned` fields. When specified either one or no business will be returned as this is exact match.").optional(),
  "only_show_owned": z.boolean().describe("Only shows businesses you own if true, show all if false").optional(),
  "only_show_joined": z.boolean().describe("Only shows businesses you have joined if true, also shows invited businesses if false").optional(),
  "search": z.union([z.string().min(1), z.null()]).describe("Search for business.profile.title").optional(),
  "enable_feed": z.union([z.boolean(), z.null()]).describe("Filter businesses based on their feed status.").optional(),
  "enable_app_user_post": z.union([z.boolean(), z.null()]).describe("Filter businesses based on whether app users can post.").optional(),
  "category_id": z.array(z.string().uuid()).describe("ID of category to fetch businesses with.").optional(),
  "embed_preview_members": z.boolean().describe("Embeds a preview of 5 members + the total_members field.").optional(),
  "embed_app_owner": z.boolean().describe("Embeds the owner if it is an app community.").optional(),
  "embed_is_ambassador": z.boolean().describe("Embeds if the user is an ambassador in the hub.").optional(),
  "embed_total_passes": z.boolean().describe("Embeds the total number of non-hidden passes in the business.").optional(),
  "embed_total_posts": z.boolean().describe("Embeds the total number of posts made by the business.").optional()
}
import { z } from "zod"

export const inputParamsSchema = {
  "sort_by": z.enum(["asc(created_at)","desc(created_at)","asc(title)","desc(title)","asc(total_app_members)","desc(total_app_members)"]).describe("Sort by businesses you are member of.\n\n- `created_at`: when the business was made.\n- `title`: title of business.\n- `total_app_members`: total ambassadors in business.\n\nNote that when not sorting by created_at, desc(created_at) is used as tiebreaker.").optional(),
  "limit": z.number().int().gt(0).lte(100).optional(),
  "token": z.union([z.string(), z.null()]).optional(),
  "embed_business_profile": z.boolean().optional(),
  "embed_business_member": z.boolean().optional(),
  "embed_total_app_members": z.boolean().describe("Embeds the total number of app members in the different businesses.").optional(),
  "embed_preview_members": z.boolean().describe("Embeds a preview of 5 members.").optional(),
  "embed_has_unread": z.boolean().describe("Embeds if the user has unread activities in the business.").optional(),
  "embed_categories": z.boolean().describe("Embeds the categories of the business.").optional(),
  "embed_locations": z.boolean().describe("Embeds the locations of the business.").optional(),
  "embed_apply_domains": z.boolean().describe("Embeds the apply domains of the business.").optional(),
  "embed_org": z.boolean().optional(),
  "embed_ambassador_data": z.boolean().optional(),
  "embed_has_ambassador_pack": z.boolean().describe("Embeds if the business has an ambassador pack.").optional(),
  "role": z.union([z.array(z.enum(["owner","admin","billing","collaborator","moderator","viewer"]).describe("Role of a BusinessMember.\n\n`owner`: Has complete read and write access to the business.\nCan delete the business.\n\n`admin`: Has the same access as the owner, except they cannot delete the business,\nchange the owner or promote other users to admin.\n\n`billing`: Has read access to the business and can manage billing.\n\n`collaborator`: Has the same access as the admin, except they cannot edit the\nbusiness or view billing.\n\n`moderator`: Has the same access as the collaborator, except they cannot manage\ntreets.\n\n`viewer`: Has read access to the business.\n\nThe tree lookup is as follows:\nowner\n  |\n  │\nadmin\n  ├──────────────┐\n  │              │\ncollaborator  billing\n  │\n  │\nmoderator\n  │\n  │\nviewer")), z.null()]).describe("Returned businesses where the user has the given roles. Multiple can be specified.").optional(),
  "id": z.union([z.string().uuid(), z.null()]).optional(),
  "invite_status": z.union([z.enum(["invited","accepted","rejected"]).describe("Invite status for BusinessMember.\n\n`invited`: invited to join the business\n\n`accepted`: accepted the invitation to join the business\n\n`rejected`: rejected the invitation to join the business"), z.null()]).describe("Filters the BusinessMembers based on their invite status.When not specified, both 'invited' and 'accepted'are returned.").optional(),
  "hub_type": z.union([z.enum(["community","provider"]).describe("Type of a hub.\n\n- `community`: Hub is community where app users can join and post\n- `provider`: Hub is a provider who can share treets to communities"), z.null()]).optional(),
  "is_active": z.union([z.boolean(), z.null()]).describe("Filter businesses based on their active status.").optional(),
  "search": z.union([z.string().min(1), z.null()]).describe("Search for business.profile.title. Requires embed_business_profile=true.").optional(),
  "category_id": z.array(z.string().uuid()).describe("ID of category to fetch treets with.").optional()
}
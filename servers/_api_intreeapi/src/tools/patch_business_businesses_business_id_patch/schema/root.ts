import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "name": z.union([z.string().max(255), z.null()]).optional(),
  "invited_by_ref_code": z.union([z.string().min(6).max(6), z.null()]).describe("Invite code of a business that invited you :D This will link the inviter business to your business, and can only be done once!").optional(),
  "onboarding_data": z.union([z.record(z.boolean()), z.null()]).describe("Each value must correspond to a step in the onboarding process, which is defined in the frontend. Only the `done` key is required, except if null.").optional(),
  "location_type": z.union([z.enum(["none","local","global_"]).describe("Type of a Business location.\n\n- `none`: Business has no location data\n- `local`: Business has local location data\n- `global_`: Business has global location data"), z.null()]).optional(),
  "location_data": z.union([z.record(z.string()), z.null()]).describe("Location data for the business. The format is defined on web frontend.").optional(),
  "access_type": z.union([z.enum(["public","discoverable","hidden"]).describe("Access type of a Business.\n\n`public`: Business can be found through the explore page\n\n`discoverable`: Business is searchable by exact handle\n\n`hidden`: Business is not searchable"), z.null()]).optional(),
  "can_app_members_invite": z.union([z.boolean(), z.null()]).describe("False: only biz users and app owner+admins can invite.").optional(),
  "can_app_members_accept_applications": z.union([z.boolean(), z.null()]).describe("False: only biz users and app owner+admins can view and accept applications.").optional(),
  "hub_type": z.union([z.literal("community"), z.null()]).describe("Upgrade from `provider` to `community`. Cannot be reversed.").optional(),
  "categories": z.union([z.array(z.string()).max(3), z.null()]).optional(),
  "location_update_data": z.union([z.object({ "ids_to_remove": z.union([z.array(z.string().uuid()), z.null()]).optional(), "new_locations": z.union([z.array(z.object({ "ref_code": z.string().describe("Added in the response if given. If not given, then it will just be set some a default value."), "address": z.string().describe("This can be whatever format client decides on."), "location": z.string().describe("Must be a point using format `(latitude,longitude)`.") }).describe("DTO for input.")).max(10), z.null()]).optional() }).describe("DTO for input."), z.null()]).optional(),
  "join_type": z.union([z.enum(["open","apply","apply_domain","integration"]).describe("How users by default joins the Hub.\n\n- `open`: Users can join without approval\n- `apply`: Users need to apply to join\n- `apply_domain`: Users need to apply using email domain verification.\n    Cannot be used for app created businesses.\n    Note that `require_member_verification` must be True.\n- `integration`: Join using one of the integrations."), z.null()]).optional(),
  "require_member_verification": z.union([z.boolean(), z.null()]).describe("If this goes from false to true, then all members will get a manual verification. If this goes from true to false, then all verifications will be removed.").optional(),
  "enable_feed": z.union([z.boolean(), z.null()]).optional(),
  "enable_app_user_post": z.union([z.boolean(), z.null()]).optional(),
  "enable_members": z.union([z.boolean(), z.null()]).optional(),
  "enable_aspects": z.union([z.boolean(), z.null()]).optional(),
  "enable_app_leaderboard": z.union([z.boolean(), z.null()]).optional(),
  "default_currency": z.union([z.enum(["usd","jpy","bgn","czk","dkk","gbp","huf","pln","ron","sek","chf","isk","nok","try","aud","brl","cad","cny","hkd","idr","ils","inr","krw","mxn","myr","nzd","php","sgd","thb","zar","eur","unknown"]).describe("Supported currencies."), z.null()]).optional()
}
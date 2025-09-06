import { z } from "zod"

export const inputParamsSchema = {
  "org_id": z.union([z.string().uuid(), z.null()]).optional(),
  "web_domain": z.string().min(2).max(30).describe("Community handle. Only alphanumeric characters and `æ, ø, å, Æ, Ø, Å` are allowed: `a-z` `A-Z`, `0-9`, `æ, ø, å, Æ, Ø, Å`. "),
  "can_app_members_invite": z.boolean().optional(),
  "can_app_members_accept_applications": z.boolean().optional(),
  "access_type": z.enum(["public","discoverable","hidden"]).describe("Access type of a Business.\n\n`public`: Business can be found through the explore page\n\n`discoverable`: Business is searchable by exact handle\n\n`hidden`: Business is not searchable").optional(),
  "hub_type": z.enum(["community","provider"]).describe("Type of a hub.\n\n- `community`: Hub is community where app users can join and post\n- `provider`: Hub is a provider who can share treets to communities").optional(),
  "location_type": z.enum(["none","local","global_"]).describe("Type of a Business location.\n\n- `none`: Business has no location data\n- `local`: Business has local location data\n- `global_`: Business has global location data").optional(),
  "location_data": z.union([z.record(z.string()), z.null()]).describe("Location data for the business. The format is defined on web frontend.").optional(),
  "join_type": z.enum(["open","apply","apply_domain","integration"]).describe("How users by default joins the Hub.\n\n- `open`: Users can join without approval\n- `apply`: Users need to apply to join\n- `apply_domain`: Users need to apply using email domain verification.\n    Cannot be used for app created businesses.\n    Note that `require_member_verification` must be True.\n- `integration`: Join using one of the integrations.").optional(),
  "require_member_verification": z.boolean().describe("Determine if verification is required for members to join. Different ways of verification can be used, and setting this to true will tell backend to enforce that if no verification is done, then the user will be removed from the business. Currently the only verification supported is by email domain.").optional(),
  "business_profile": z.union([z.object({ "website_url": z.union([z.string(), z.null()]).optional(), "phone": z.union([z.string().max(255), z.null()]).optional(), "video_url": z.union([z.string().max(2047), z.null()]).optional(), "email": z.union([z.string().email(), z.null()]).optional(), "title": z.string().min(1).max(255).describe("Title of the business profile."), "description": z.union([z.string().max(600).describe("Description of the business profile."), z.null()]).optional(), "address": z.union([z.string().max(255).describe("Address of the business profile."), z.null()]).optional() }).strict().describe("DTO for a request for creating a new BizProfile."), z.null()]).optional(),
  "categories": z.union([z.array(z.string()).max(3), z.null()]).optional(),
  "locations": z.union([z.array(z.object({ "ref_code": z.string().describe("Added in the response if given. If not given, then it will just be set some a default value."), "address": z.string().describe("This can be whatever format client decides on."), "location": z.string().describe("Must be a point using format `(latitude,longitude)`.") }).describe("DTO for input.")).max(10), z.null()]).optional(),
  "apply_domains": z.union([z.array(z.object({ "name": z.string().regex(new RegExp("^[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}$")), "verification_interval_minutes": z.union([z.number().int().gte(5), z.null()]).describe("Note that the min value for PROD is 1440.") }).describe("DTO for input.")).max(10).describe("Can only be used when `join_type=apply_domain`. If none are given then all domains are allowed."), z.null()]).optional(),
  "enable_feed": z.boolean().optional(),
  "enable_app_user_post": z.boolean().optional(),
  "enable_members": z.boolean().optional(),
  "enable_aspects": z.boolean().optional(),
  "default_currency": z.enum(["usd","jpy","bgn","czk","dkk","gbp","huf","pln","ron","sek","chf","isk","nok","try","aud","brl","cad","cny","hkd","idr","ils","inr","krw","mxn","myr","nzd","php","sgd","thb","zar","eur","unknown"]).describe("Supported currencies.").optional()
}
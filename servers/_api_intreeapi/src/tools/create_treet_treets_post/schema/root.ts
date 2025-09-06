import { z } from "zod"

export const inputParamsSchema = {
  "hub_id": z.string().uuid(),
  "valid_from": z.string().datetime({ offset: true }),
  "expires_at": z.union([z.string().datetime({ offset: true }), z.null()]).optional(),
  "hidden_until": z.union([z.string().datetime({ offset: true }), z.null()]).optional(),
  "treet_version": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `treet_version` to the tool, first call the tool `expandSchema` with \"/properties/treet_version\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>InputDTO.</property-description>"),
  "total_redeem_limit": z.union([z.number().int().gt(0).lte(100000), z.null()]).optional(),
  "user_redeem_limit": z.union([z.number().int().gte(0).lte(100000), z.null()]).optional(),
  "share_redeem_limit": z.union([z.number().int().gte(0).lte(100000), z.null()]).describe("If not set, it will be set to user_limit. If set to greater than user_limit it will also be set to user_limit").optional(),
  "show_redeems_left": z.boolean().describe("If false, UI should hide redeems left for app users.").optional(),
  "is_sharable": z.boolean().optional(),
  "total_share_limit": z.union([z.number().int().gte(0).lte(100000), z.null()]).optional(),
  "user_share_limit": z.union([z.number().int().gte(0).lte(100000), z.null()]).optional(),
  "branch_limit": z.number().int().gte(0).lt(10).optional(),
  "redeem_validation_type": z.enum(["naive","in_person","external"]).describe("Redeem validation type for a Treet.\n\nWhen a Redeem is validated, then it is \"used\".\n\n- `naive`: The redeem is automatically verified, when the Treet is redeemed.\n- `in_person`: In person validation\n- `external`: (not used) external validation, through a website or another app etc.").optional(),
  "schedule_id": z.union([z.string().uuid(), z.null()]).optional(),
  "cooldown": z.union([z.number().int().gte(120).lte(315576000), z.null()]).describe("Cooldown in seconds. If not set, no cooldown.").optional(),
  "allow_reservations": z.boolean().describe("If false, reservations button will be hidden on app.").optional(),
  "gallery_ids": z.union([z.array(z.string().uuid()).max(10), z.null()]).optional(),
  "category_ids": z.union([z.array(z.string().uuid()).max(3), z.null()]).optional(),
  "codes": z.union([z.array(z.string()).min(1).max(10000), z.null()]).optional(),
  "locations": z.union([z.array(z.object({ "address": z.string().describe("This can be whatever format client decides on."), "location": z.string().describe("Must be a point using format `(latitude,longitude)`.") }).describe("DTO for input.")).max(10), z.null()]).optional()
}
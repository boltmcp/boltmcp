import { z } from "zod"

export const inputParamsSchema = {
  "cover_image_id": z.union([z.string().uuid(), z.null()]).optional(),
  "vertical_cover_image_id": z.union([z.string().uuid(), z.null()]).optional(),
  "banner_image_id": z.union([z.string().uuid(), z.null()]).optional(),
  "gradient_color_start": z.union([z.string(), z.null()]).optional(),
  "gradient_color_end": z.union([z.string(), z.null()]).optional(),
  "pattern_id": z.union([z.string(), z.null()]).optional(),
  "price_type": z.enum(["free","one_time","subscription"]).describe("Payment type for a BizGroup.\n\n- `free`: free (on prod this can only be created by Intree staff)\n- `one_time`: one time payment\n- `subscription`: subscription").optional(),
  "paid_by": z.enum(["business","member"]).describe("Who pays for a BizGroup.\n\n- `business`: Attached card pays for each member.\n- `member`: Member of group pays.\n\nIn both cases the payment will go to the business where Intree takes a fee.").optional(),
  "price": z.number().int().gte(0).lte(2147483646).describe("Price in US cents. Should be 0 when `price_type=free`. `price_type=free` should have `paid_by=business`. Min for member paid: 200 cents.").optional(),
  "interval": z.union([z.enum(["day","month","week","year"]).describe("Billing interval for BizGroup subscriptions.\n\nUse interval if and only if `price_type=subscription`.\n\nWhen `paid_by=business`, then always `interval=month` and `interval_count=1`.\n\nInterval is defined similar to Stripe's interval and interval_count:\n- E.g. if `interval=month` and `interval_count=3` then bills occur every 3 months.\n- Maximum of three years interval allowed (3 years, 36 months, or 156 weeks)."), z.null()]).optional(),
  "interval_count": z.union([z.number().int().gte(1).lte(1095), z.null()]).optional(),
  "one_time_duration_minutes": z.union([z.number().int().gte(0).lte(2147483646), z.null()]).describe("Duration in minutes for one-time payment. Does not work for subscriptions. If null, then no limit. If set, then it will limit the duration of the group.").optional(),
  "business_id": z.string().uuid(),
  "avatar_image_id": z.union([z.string().uuid(), z.null()]).optional(),
  "title": z.string().min(1).max(255),
  "show_title": z.boolean().optional(),
  "description": z.union([z.string().max(2000), z.null()]).optional(),
  "visibility": z.enum(["public","private","member_public","group_member_public"]).describe("Visibility of a BizGroup.\n\n`public`: visible to everyone\n\n`private`: only access through link or invitation, but cannot be seen\n\n`member_public`: visible to members of the community\n\n`group_member_public`: like private but visible to members already in the group"),
  "access_state": z.enum(["public","application"]).describe("Specifies the access state of a BizGroup - how it can be accessed.\n\n- `public`: anyone can join\n- `application`: requires application").optional(),
  "member_limit": z.union([z.number().int().gte(0).lte(2147483646), z.null()]).describe("Max number of members allowed in the group. If null, then no limit. If subscription, then it will limit the current number of active members. If one-time payment, then it will limit the number of total joined members.").optional(),
  "treet_ids": z.union([z.array(z.string().uuid()), z.null()]).optional(),
  "is_draft": z.boolean().optional(),
  "treet_share_access": z.enum(["none","one_level","reshares"]).describe("The access level of a Treet share for packs.\n\n- `none`: Only members can receive treets from the pack\n- `one_level`: Members can share treets from the pack\n- `reshares`: Users receiving treets from anyone can share them").optional()
}
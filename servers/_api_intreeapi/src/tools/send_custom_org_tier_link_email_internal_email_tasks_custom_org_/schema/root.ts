import { z } from "zod"

export const inputParamsSchema = {
  "org_id": z.string().uuid(),
  "price": z.number().int().gte(0),
  "max_hubs": z.number().int().gte(0),
  "max_admins_per_hub": z.number().int().gte(0),
  "max_ambassadors": z.number().int().gte(0),
  "allow_extra_ambassadors": z.boolean(),
  "extra_ambassador_price": z.number().int().gte(0),
  "allow_hidden_member_list": z.boolean(),
  "allow_free_packs": z.boolean(),
  "max_share_access_level": z.enum(["none","one_level","reshares"]).describe("The access level of a Treet share for packs.\n\n- `none`: Only members can receive treets from the pack\n- `one_level`: Members can share treets from the pack\n- `reshares`: Users receiving treets from anyone can share them")
}
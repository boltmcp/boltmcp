import { z } from "zod"

export const inputParamsSchema = {
  "is": z.enum(["active","archived","deleted"]).describe("\\* \\`active\\` - The item price can be used in subscriptions. \\* \\`archived\\` - The item price is no longer active and cannot be used in new subscriptions or added to existing ones. Existing subscriptions that already have this item price will continue to renew with the item price. \\* \\`deleted\\` - Indicates that the item price has been deleted. The `id` and `name` can be reused.\n").optional(),
  "is_not": z.enum(["active","archived","deleted"]).describe("\\* \\`active\\` - The item price can be used in subscriptions. \\* \\`archived\\` - The item price is no longer active and cannot be used in new subscriptions or added to existing ones. Existing subscriptions that already have this item price will continue to renew with the item price. \\* \\`deleted\\` - Indicates that the item price has been deleted. The `id` and `name` can be reused.\n").optional(),
  "in": z.string().regex(new RegExp("^\\[(active|archived|deleted)(,(active|archived|deleted))*\\]$")).optional(),
  "not_in": z.string().regex(new RegExp("^\\[(active|archived|deleted)(,(active|archived|deleted))*\\]$")).optional()
}
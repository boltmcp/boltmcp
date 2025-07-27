import { z } from "zod"

export const inputParamsSchema = {
  "is": z.enum(["active","archived","deleted"]).describe("\\* \\`active\\` - The item can be used to create new item prices. \\* \\`archived\\` - The item is no longer active and no new item prices can be created \\* \\`deleted\\` - Indicates that the item has been [deleted](./items?prod_cat_ver=2#delete_an_item). The `id` and `name` can be reused. Deleted items can be retrieved using [List items](./items?prod_cat_ver=2#list_items).\n").optional(),
  "is_not": z.enum(["active","archived","deleted"]).describe("\\* \\`active\\` - The item can be used to create new item prices. \\* \\`archived\\` - The item is no longer active and no new item prices can be created \\* \\`deleted\\` - Indicates that the item has been [deleted](./items?prod_cat_ver=2#delete_an_item). The `id` and `name` can be reused. Deleted items can be retrieved using [List items](./items?prod_cat_ver=2#list_items).\n").optional(),
  "in": z.string().regex(new RegExp("^\\[(active|archived|deleted)(,(active|archived|deleted))*\\]$")).optional(),
  "not_in": z.string().regex(new RegExp("^\\[(active|archived|deleted)(,(active|archived|deleted))*\\]$")).optional()
}
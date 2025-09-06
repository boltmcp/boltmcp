import { z } from "zod"

export const inputParamsSchema = {
  "get_push_on_new_invite": z.union([z.boolean(), z.null()]).optional(),
  "get_push_on_new_introduction": z.union([z.boolean(), z.null()]).optional(),
  "get_push_on_new_relation": z.union([z.boolean(), z.null()]).optional(),
  "get_push_on_thread_activity": z.union([z.boolean(), z.null()]).optional(),
  "get_push_on_new_biz_invite": z.union([z.boolean(), z.null()]).optional(),
  "get_push_on_new_treet": z.union([z.boolean(), z.null()]).optional(),
  "get_push_on_new_post": z.union([z.boolean(), z.null()]).optional(),
  "get_push_on_owned_biz_updates": z.union([z.boolean(), z.null()]).optional(),
  "get_push_on_reservation": z.union([z.boolean(), z.null()]).optional()
}
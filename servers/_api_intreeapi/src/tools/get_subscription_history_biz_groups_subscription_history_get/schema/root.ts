import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().gt(0).lte(100).optional(),
  "token": z.union([z.string(), z.null()]).optional(),
  "is_active": z.union([z.boolean(), z.null()]).describe("Filter by active status. If false will only return subscriptions, that are not active. If true will only return active subscriptions. If not given, all are returned.").optional(),
  "price_type": z.array(z.enum(["free","one_time","subscription"]).describe("Payment type for a BizGroup.\n\n- `free`: free (on prod this can only be created by Intree staff)\n- `one_time`: one time payment\n- `subscription`: subscription")).describe("Filter by price type. If not given will return all types.").optional()
}
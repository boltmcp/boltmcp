import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "biz_partnership_id": z.string().uuid(),
  "weekly_distributes": z.union([z.number().int().gte(0), z.null()]).describe("Weekly amount of total times other business can distribute treets to your groups. If set to None, there will be no limit.").optional(),
  "contact_id": z.union([z.string().uuid(), z.null()]).describe("ID of the BizUser of your business, that you want as contact for this business.").optional(),
  "show_as_partner": z.union([z.boolean(), z.null()]).describe("Whether to show the other business as a partner under business.").optional()
}
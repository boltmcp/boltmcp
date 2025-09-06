import { z } from "zod"

export const inputParamsSchema = {
  "biz_partnership_id": z.string().uuid(),
  "business_id": z.string().uuid(),
  "biz_groups": z.array(z.object({ "id": z.string().uuid(), "enabled": z.boolean() }).describe("DTO for BizGroupEnabled."))
}
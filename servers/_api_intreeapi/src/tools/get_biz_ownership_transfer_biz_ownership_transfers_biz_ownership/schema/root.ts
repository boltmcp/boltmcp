import { z } from "zod"

export const inputParamsSchema = {
  "biz_ownership_transfer_id": z.string().uuid()
}
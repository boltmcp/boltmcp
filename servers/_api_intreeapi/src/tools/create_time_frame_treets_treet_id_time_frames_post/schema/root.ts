import { z } from "zod"

export const inputParamsSchema = {
  "treet_id": z.string().uuid(),
  "interval_type": z.enum(["day","week","month"]).describe("Enum for when the time frame limit is applied.\n\nE.g. if `day`, then the Treet will have a daily redeem limit per user.\n\nNote that the values corresponds to the Postgres time parts.\n\n- `day`: daily\n- `week`: weekly\n- `month`: monthly"),
  "limit": z.number().int().gt(0).lte(100000),
  "tz": z.string().optional()
}
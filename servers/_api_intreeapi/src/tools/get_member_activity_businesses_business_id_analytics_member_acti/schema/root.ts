import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "start": z.union([z.string().datetime({ offset: true }), z.null()]).describe("Start of interval, to count data from").optional(),
  "stop": z.union([z.string().datetime({ offset: true }), z.null()]).describe("End of interval, to count data from").optional(),
  "bins": z.enum(["time","weekday","month","monthday","yearday"]).describe("Type to group data by"),
  "tz": z.string().describe("Timezone to get data in, defaults to UTC.").optional(),
  "include_biz_made": z.boolean().describe("If true will include posts and comments made by the business. If false will only include posts and comments made by members. Default is false.").optional(),
  "embed_post_activity": z.boolean().optional(),
  "embed_comment_activity": z.boolean().optional()
}
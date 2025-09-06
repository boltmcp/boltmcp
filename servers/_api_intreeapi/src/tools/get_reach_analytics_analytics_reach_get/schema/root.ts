import { z } from "zod"

export const inputParamsSchema = {
  "bins": z.enum(["time","weekday","month","monthday","yearday"]).describe("Type to group data by"),
  "tz": z.string().describe("Timezone to get data in, defaults to UTC.").optional(),
  "start": z.string().datetime({ offset: true }).describe("Start of interval, to count data from").optional(),
  "stop": z.string().datetime({ offset: true }).describe("End of interval, to count data from").optional(),
  "treet_id": z.union([z.string().uuid(), z.null()]).describe("Id of Treet to get data for, if not given, get all data for hub").optional(),
  "hub_id": z.string().uuid()
}
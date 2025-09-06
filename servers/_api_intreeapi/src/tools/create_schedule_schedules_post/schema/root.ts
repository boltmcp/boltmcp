import { z } from "zod"

export const inputParamsSchema = {
  "hub_id": z.string().uuid(),
  "name": z.union([z.string().min(1).max(255), z.null()]).optional(),
  "enforce_interval": z.boolean().describe("When treets have set a schedule with enforce_interval true, the schedule will be enforced for those treets. When false, the schedule is not enforced.").optional(),
  "tz": z.string().describe("Timezone which the intervals are given in.").optional(),
  "intervals": z.array(z.object({ "start": z.string().time().describe("Start time of the interval. The time will be interpreted as being in the time zone of the schedule. Any offsets will be ignored i.e. 08:00-0500 will be interpreted as 08:00."), "stop": z.string().time().describe("Stop time of the interval. The time will be interpreted as being in the time zone of the schedule. Any offsets will be ignored i.e. 08:00-0500 will be interpreted as 08:00."), "day": z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7)]).describe("The day of the week the interval is active. Monday=1, Sunday=7"), "limit": z.union([z.number().int().gt(0).lte(100000), z.null()]).describe("The limit for amount of verifications a user can make in this interval. No tally is being kept between intervals. If not set, no limit.").optional() }).describe("Input DTO for client."))
}
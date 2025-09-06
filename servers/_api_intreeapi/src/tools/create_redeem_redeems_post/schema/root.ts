import { z } from "zod"

export const inputParamsSchema = {
  "booking_event_id": z.union([z.string().uuid(), z.null()]).describe("Use to connect a booking from HOSAPI to the redeem.").optional(),
  "booking_name": z.union([z.string(), z.null()]).describe("Name attached to booking. Only used if the event_id is given.").optional(),
  "treet_id": z.string().uuid()
}
import { z } from "zod"

export const inputParamsSchema = {
  "booking_event_id": z.union([z.string().uuid(), z.null()]).describe("Use to connect a booking from HOSAPI to the redeem.").optional(),
  "booking_name": z.union([z.string(), z.null()]).describe("Name attached to booking. Only used if the event_id is given.").optional(),
  "invite_link_id": z.string().uuid(),
  "reservation_id": z.union([z.string().uuid(), z.null()]).describe("Id for reservation to be used when redeeming, if not given, it will check if there are any existing reservations, and use that. Should be given for anonymous user.").optional()
}
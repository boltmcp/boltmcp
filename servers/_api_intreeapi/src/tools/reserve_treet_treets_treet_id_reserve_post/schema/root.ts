import { z } from "zod"

export const inputParamsSchema = {
  "treet_id": z.string().uuid(),
  "expiry_time_minutes": z.number().int().gte(10).lte(10080).describe("The time that the reservation is active. When making a booking, this should be set to something low like 10 (the minimum). For expiry times less than 2 hours, there will be no cooldown when the reservation expires.").optional(),
  "send_notifications": z.boolean().describe("If true, will send notifications, when the reservation is about to expire, and when it has expired. If false, no notifications will be sent regarding the reservation. When making a booking, this should be false.").optional(),
  "error_on_existing_reservation": z.boolean().describe("If true, will return an error if the user already has a reservation for the Treet. If false, will return the existing reservation id.When making a booking, this should be false.").optional(),
  "save_treet": z.boolean().describe("If true, will set the treet as saved for the user. If false it will not set it. Should be false, when booking.").optional()
}
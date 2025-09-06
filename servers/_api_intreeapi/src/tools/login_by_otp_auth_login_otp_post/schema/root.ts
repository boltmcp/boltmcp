import { z } from "zod"

export const inputParamsSchema = {
  "dev_access_expiry_minutes": z.union([z.number().int(), z.null()]).optional(),
  "dev_refresh_expiry_minutes": z.union([z.number().int(), z.null()]).optional(),
  "phone": z.string().max(255),
  "otp_code": z.string(),
  "device": z.union([z.object({ "vendor_id": z.string().max(50).describe("Unique identifier for device."), "vendor_name": z.enum(["apple","android","other"]).describe("Used to determine which push notification provider to use."), "os_name": z.union([z.string().max(50), z.null()]).optional(), "os_version": z.union([z.string().max(255), z.null()]).optional(), "device_name": z.union([z.string().max(255), z.null()]).optional() }).describe("Input request DTO for creating a Device."), z.null()]).optional()
}
import { z } from "zod"

export const inputParamsSchema = {
  "code": z.string().describe("Code from the verify link. It will be decoded into otp and phone."),
  "device": z.union([z.object({ "vendor_id": z.string().max(50).describe("Unique identifier for device."), "vendor_name": z.enum(["apple","android","other"]).describe("Used to determine which push notification provider to use."), "os_name": z.union([z.string().max(50), z.null()]).optional(), "os_version": z.union([z.string().max(255), z.null()]).optional(), "device_name": z.union([z.string().max(255), z.null()]).optional() }).describe("Input request DTO for creating a Device."), z.null()]).optional()
}
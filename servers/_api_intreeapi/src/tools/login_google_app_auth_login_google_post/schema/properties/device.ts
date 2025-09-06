import { z } from "zod"

export const inputParamsSchema = {
  "vendor_id": z.string().max(50).describe("Unique identifier for device."),
  "vendor_name": z.enum(["apple","android","other"]).describe("Used to determine which push notification provider to use."),
  "os_name": z.union([z.string().max(50), z.null()]).optional(),
  "os_version": z.union([z.string().max(255), z.null()]).optional(),
  "device_name": z.union([z.string().max(255), z.null()]).optional()
}
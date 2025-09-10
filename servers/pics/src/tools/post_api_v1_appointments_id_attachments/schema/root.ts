import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Id of the Appointment to attach a file to"),
  "iD": z.number().int().describe("Appointment ID"),
  "description": z.string().describe("Description of the attachment"),
  "fileType": z.string().describe("File type of the attachment").optional(),
  "expires": z.string().datetime({ offset: true }).describe("Expiry date of the attachment").optional(),
  "file": z.string().base64().describe("Required. The file to be attached")
}
import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Id of the Task to attach a file to"),
  "iD": z.number().int(),
  "description": z.string(),
  "fileType": z.string().optional(),
  "expires": z.string().datetime({ offset: true }).optional(),
  "file": z.string().base64()
}
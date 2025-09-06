import { z } from "zod"

export const inputParamsSchema = {
  "partner_id": z.string().uuid().describe("ID of the hub you want to remove the Treet from."),
  "treet_id": z.string().uuid()
}
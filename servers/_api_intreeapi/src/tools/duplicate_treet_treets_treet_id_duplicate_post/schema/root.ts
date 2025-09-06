import { z } from "zod"

export const inputParamsSchema = {
  "treet_id": z.string().uuid(),
  "transfer_codes": z.boolean().describe("Transfer codes from the original Treet to the duplicated Treet. This will remove the codes from the old treet.").optional()
}
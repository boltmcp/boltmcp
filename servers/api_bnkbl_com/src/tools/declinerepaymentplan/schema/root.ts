import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("This is the payable financing request ID provided by Bankable when the payables were submitted"),
  "decline_reason": z.string().describe("The reason for declining the financing request")
}
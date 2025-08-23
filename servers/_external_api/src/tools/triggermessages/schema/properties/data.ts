import { z } from "zod"

export const inputParamsSchema = {
  "type": z.literal("triggerCampaigns"),
  "attributes": z.array(z.object({ "phone": z.string().min(8).max(15).describe("The ideal format is the E164 format; otherwise the number will be parsed with best attempt while using using the International Dialing Code of the account's business region.") }).catchall(z.string()))
}
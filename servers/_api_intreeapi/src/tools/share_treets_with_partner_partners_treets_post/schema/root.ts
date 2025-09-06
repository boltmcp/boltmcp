import { z } from "zod"

export const inputParamsSchema = {
  "partner_id": z.string().uuid().describe("The hub id of the partner to share treets with."),
  "hub_id": z.string().uuid().describe("The hub id that owns the treets."),
  "treet_ids": z.array(z.string().uuid()).min(1).max(100)
}
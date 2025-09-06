import { z } from "zod"

export const inputParamsSchema = {
  "hub_type": z.union([z.enum(["community","provider"]).describe("Type of a hub.\n\n- `community`: Hub is community where app users can join and post\n- `provider`: Hub is a provider who can share treets to communities"), z.null()]).optional()
}
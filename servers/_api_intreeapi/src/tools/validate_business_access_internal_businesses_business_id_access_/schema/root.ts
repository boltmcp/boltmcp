import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "expected_type": z.enum(["community","provider"]).describe("Type of a hub.\n\n- `community`: Hub is community where app users can join and post\n- `provider`: Hub is a provider who can share treets to communities"),
  "role": z.literal("write").describe("Role.\n\n- `write`: Has write access or above to the business."),
  "user_id": z.string().uuid(),
  "account_type": z.enum(["REGULAR","BUSINESS"]).describe("Enum used to indicate account type.\n\n- `REGULAR`: app user account\n- `BUSINESS`: hub/hub user account")
}
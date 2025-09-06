import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "upgrade_token": z.string(),
  "new_web_domain": z.union([z.string().min(2).max(30).describe("Community handle. Only alphanumeric characters and `æ, ø, å, Æ, Ø, Å` are allowed: `a-z` `A-Z`, `0-9`, `æ, ø, å, Æ, Ø, Å`. "), z.null()]).describe("A new web domain can be selected (given it is not taken).").optional()
}
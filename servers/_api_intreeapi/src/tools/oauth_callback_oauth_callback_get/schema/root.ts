import { z } from "zod"

export const inputParamsSchema = {
  "integration": z.enum(["planday","google"]).describe("Type of OAuth integration.\n\nNOTE: remember to update migrations if you update this enum."),
  "code": z.string(),
  "state": z.string()
}
import { z } from "zod"

export const inputParamsSchema = {
  "treet_id": z.string().uuid(),
  "state": z.enum(["hidden","saved"]).describe("A preference of a Treet by an App User.\n\n- `hidden`: The Treet is not shown to the user in the main feed,\n    but still shown when viewing a Pack.\n- `saved`: The Treet is saved by the user.")
}
import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string().describe("The name of the user which should change its password."),
  "password": z.string().describe("The new password of the new user, either in clear text of hex-encoded (see above).")
}
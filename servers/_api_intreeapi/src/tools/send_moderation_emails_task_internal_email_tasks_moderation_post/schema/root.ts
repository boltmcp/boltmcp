import { z } from "zod"

export const inputParamsSchema = {
  "media_id": z.string().uuid(),
  "moderation_label_names": z.array(z.string()).describe("List of moderation labels.")
}
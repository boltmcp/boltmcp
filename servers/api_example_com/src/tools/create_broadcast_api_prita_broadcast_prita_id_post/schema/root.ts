import { z } from "zod"

export const inputParamsSchema = {
  "prita_id": z.string().uuid(),
  "token": z.union([z.string(), z.null()]).optional(),
  "message_content": z.string(),
  "recipient_type": z.string(),
  "recipients": z.union([z.array(z.string()), z.null()]).optional(),
  "attachment_url": z.union([z.string(), z.null()]).optional(),
  "recipients_count": z.number().int()
}
import { z } from "zod"

export const inputParamsSchema = {
  "use_mqtt": z.boolean().describe("Send via MQTT (recommended)").optional(),
  "tag_id": z.string().uuid(),
  "value": z.number(),
  "timestamp": z.string().datetime({ offset: true }),
  "quality": z.string().optional(),
  "source": z.union([z.string(), z.null()]).optional()
}
import { z } from "zod"

export const inputParamsSchema = {
  "aspect_id": z.string().uuid(),
  "feed_preference": z.union([z.enum(["preferred","normal","hidden"]).describe("User's feed preference to an aspect.\n\n`preferred`: posts in this aspect will also appear in the user's preferred feed\n\n`normal`: posts in this aspect will appear in the user's normal feed\n\n`hidden`: posts in this aspect will not appear in the user's feed"), z.null()]).optional(),
  "notification_preference": z.union([z.enum(["push","activity","silent"]).describe("User's notification preference to an aspect.\n\nUNUSED\n\n`push`: user will receive push notifications for this aspect\n\n`activity`: user will receive activity notifications for this aspect\n\n`silent`: user will not receive notifications for this aspect"), z.null()]).optional(),
  "note": z.union([z.string().max(4095), z.null()]).optional()
}
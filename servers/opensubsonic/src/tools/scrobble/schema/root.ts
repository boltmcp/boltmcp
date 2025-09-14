import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A string which uniquely identifies the file to scrobble."),
  "time": z.number().int().gte(0).describe("(Since 1.8.0) The time (in milliseconds since 1 Jan 1970) at which the song was listened to.").optional(),
  "submission": z.boolean().describe("Whether this is a “submission” or a “now playing” notification.").optional()
}
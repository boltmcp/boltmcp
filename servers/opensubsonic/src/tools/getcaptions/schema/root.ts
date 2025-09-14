import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The ID of the video."),
  "format": z.enum(["srt","vtt"]).describe("Preferred captions format (“srt” or “vtt”).").optional()
}
import { z } from "zod"

export const inputParamsSchema = {
  "action": z.enum(["get","status","set","start","stop","skip","add","clear","remove","shuffle","setGain"]).describe("JukeBox action."),
  "index": z.number().int().gte(0).describe("Used by `skip` and `remove`. Zero-based index of the song to skip to or remove.").optional(),
  "offset": z.number().int().gte(0).describe("(Since 1.7.0) Used by `skip`. Start playing this many seconds into the track.").optional(),
  "id": z.array(z.string()).describe("Used by `add` and `set`. ID of song to add to the jukebox playlist. Use multiple id parameters to add many songs in the same request. (set is similar to a clear followed by a add, but will not change the currently playing track.)").optional(),
  "gain": z.number().gte(0).lte(1).describe("Used by `setGain` to control the playback volume. A float value between 0.0 and 1.0.").optional()
}
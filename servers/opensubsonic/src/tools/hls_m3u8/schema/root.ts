import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A string which uniquely identifies the media file to stream."),
  "bitRate": z.number().int().describe("If specified, the server will attempt to limit the bitrate to this value, in kilobits per second. If this parameter is specified more than once, the server will create a variant playlist, suitable for adaptive bitrate streaming. The playlist will support streaming at all the specified bitrates. The server will automatically choose video dimensions that are suitable for the given bitrates. Since 1.9.0 you may explicitly request a certain width (480) and height (360) like so: bitRate=1000@480x360").optional(),
  "audioTrack": z.string().describe("The ID of the audio track to use. See `getVideoInfo` for how to get the list of available audio tracks for a video.").optional()
}
import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A string which uniquely identifies the file to stream. Obtained by calls to getMusicDirectory."),
  "maxBitRate": z.number().int().gte(0).describe("(Since 1.2.0) If specified, the server will attempt to limit the bitrate to this value, in kilobits per second. If set to zero, no limit is imposed.").optional(),
  "format": z.string().describe("(Since 1.6.0) Specifies the preferred target format (e.g., “mp3” or “flv”) in case there are multiple applicable transcodings. Starting with 1.9.0 you can use the special value “raw” to disable transcoding.").optional(),
  "timeOffset": z.number().int().gte(0).describe("By default only applicable to video streaming. If specified, start streaming at the given offset (in seconds) into the media. The `Transcode Offset` extension enables the parameter to music too.").optional(),
  "size": z.string().regex(new RegExp("^[0-9]+x[0-9]+$")).describe("(Since 1.6.0) Only applicable to video streaming. Requested video size specified as WxH, for instance “640x480”.").optional(),
  "estimateContentLength": z.boolean().describe("(Since 1.8.0). If set to “true”, the Content-Length HTTP header will be set to an estimated value for transcoded or downsampled media.").optional(),
  "converted": z.boolean().describe("(Since 1.14.0) Only applicable to video streaming. Servers can optimize videos for streaming by converting them to MP4. If a conversion exists for the video in question, then setting this parameter to “true” will cause the converted video to be returned instead of the original.").optional()
}
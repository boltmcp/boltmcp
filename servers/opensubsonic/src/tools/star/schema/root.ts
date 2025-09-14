import { z } from "zod"

export const inputParamsSchema = {
  "id": z.array(z.string()).describe("The ID of the file (song) or folder (album/artist) to star. Multiple parameters allowed.").optional(),
  "albumId": z.array(z.string()).describe("The ID of an album to star. Use this rather than `id` if the client accesses the media collection according to ID3 tags rather than file structure. Multiple parameters allowed.").optional(),
  "artistId": z.array(z.string()).describe("The ID of an artist to star. Use this rather than `id` if the client accesses the media collection according to ID3 tags rather than file structure. Multiple parameters allowed.").optional()
}
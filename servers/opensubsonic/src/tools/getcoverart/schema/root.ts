import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The coverArt ID. Returned by most entities likes `Child` or `AlbumID3`"),
  "size": z.number().int().describe("If specified, scale image to this size.").optional()
}
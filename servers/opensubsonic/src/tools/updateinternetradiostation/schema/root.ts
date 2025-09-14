import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The ID of the station."),
  "streamUrl": z.string().describe("The stream URL for the station."),
  "name": z.string().describe("The user-defined name for the station."),
  "homepageUrl": z.string().describe("The home page URL for the station.").optional()
}
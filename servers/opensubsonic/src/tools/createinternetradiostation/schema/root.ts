import { z } from "zod"

export const inputParamsSchema = {
  "streamUrl": z.string().describe("The stream URL for the station."),
  "name": z.string().describe("The station name."),
  "homepageUrl": z.string().describe("The home page URL for the station.").optional()
}
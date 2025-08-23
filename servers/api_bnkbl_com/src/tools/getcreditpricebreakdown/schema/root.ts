import { z } from "zod"

export const inputParamsSchema = {
  "country": z.string().describe("ISO Country Code (two letter country code from ISO 3166)."),
  "registration_number": z.string().describe("Company registration number.")
}
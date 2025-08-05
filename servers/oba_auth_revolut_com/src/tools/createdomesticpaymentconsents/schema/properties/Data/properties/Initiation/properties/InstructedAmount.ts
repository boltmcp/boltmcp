import { z } from "zod"

export const inputParamsSchema = {
  "Amount": z.string().regex(new RegExp("^\\d{1,13}\\.\\d{1,5}$")).describe("The amount of money where the unit of currency is explicit and compliant with [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)."),
  "Currency": z.string().regex(new RegExp("^[A-Z]{3,3}$")).describe("[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.")
}
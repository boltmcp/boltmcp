import { z } from "zod"

export const inputParamsSchema = {
  "AddressLine": z.array(z.string().min(1).max(70)).min(0).max(2).describe("The information that locates and identifies the delivery address, as defined by postal services, that is presented in free format text.").optional(),
  "StreetName": z.string().min(1).max(70).describe("The name of the street.").optional(),
  "BuildingNumber": z.string().min(1).max(16).describe("The number of the building.").optional(),
  "PostCode": z.string().min(1).max(16).describe("The post code of the delivery address.").optional(),
  "TownName": z.string().min(1).max(35).describe("The name of the town."),
  "CountrySubDivision": z.array(z.string().min(1).max(35)).min(0).max(2).describe("The subdivision of the country, for example, state, region or county.").optional(),
  "Country": z.string().regex(new RegExp("^[A-Z]{2,2}$")).describe("The name of the country.")
}
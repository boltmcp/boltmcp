import { z } from "zod"

export const inputParamsSchema = {
  "Department": z.string().min(1).max(70).describe("The name of the department.").optional(),
  "SubDepartment": z.string().min(1).max(70).describe("The name of the sub-department.").optional(),
  "StreetName": z.string().min(1).max(70).describe("The name of the street.").optional(),
  "BuildingNumber": z.string().min(1).max(16).describe("The number of the building.").optional(),
  "PostCode": z.string().min(1).max(16).describe("The post code of the address.").optional(),
  "TownName": z.string().min(1).max(35).describe("The name of the town.").optional(),
  "CountrySubDivision": z.string().min(1).max(35).describe("The subdivision of the country, such as state, region, or county.").optional(),
  "Country": z.string().regex(new RegExp("^[A-Z]{2,2}$")).describe("The name of the country.").optional(),
  "AddressLine": z.array(z.string().min(1).max(70)).min(0).max(7).describe("The information that locates and identifies the address of the creditor, presented in free format text.").optional()
}
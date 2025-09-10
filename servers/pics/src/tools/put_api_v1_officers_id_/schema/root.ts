import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The Officer's ID"),
  "b_id": z.string().min(1).describe("The Officer's ID"),
  "title": z.string().max(5).nullable().describe("The Officer's title code").optional(),
  "firstNames": z.string().min(1).max(30).describe("The Officer's first names"),
  "surname": z.string().min(1).max(30).describe("The Officer's surname"),
  "jobTitle": z.string().max(150).nullable().describe("The Officer's job title").optional(),
  "email": z.string().email().max(100).nullable().describe("The Officer's email address").optional(),
  "roles": z.array(z.string()).describe("The Officer's role codes"),
  "systemStatus": z.string().min(1).max(1).describe("The Officer's system status"),
  "address": z.string().max(180).nullable().describe("The Officer's address").optional(),
  "postcode": z.string().nullable().describe("The Officer's postcode").optional(),
  "phone": z.string().max(30).nullable().describe("The Officer's phone number").optional(),
  "mobile": z.string().max(15).nullable().describe("The Officer's mobile number").optional(),
  "allowedContactMethods": z.array(z.string()).nullable().describe("The Officer's allowed contact methods").optional(),
  "preferredContactMethod": z.string().nullable().describe("The officer's preferred contact method").optional(),
  "sex": z.string().max(1).nullable().describe("The Officer's sex code").optional(),
  "ethnicity": z.string().max(2).nullable().describe("The Officer's ethnicity").optional(),
  "additionalID": z.string().nullable().describe("The Officer's additional ID").optional(),
  "superior": z.string().nullable().describe("The Officer's superior code").optional()
}
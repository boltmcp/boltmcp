import { z } from "zod"

export const inputParamsSchema = {
  "firstNames": z.string().min(1).max(30).describe("Officer's first names"),
  "surname": z.string().min(1).max(30).describe("Officer's surname"),
  "email": z.string().email().max(100).nullable().describe("Officer's email address").optional(),
  "phone": z.string().max(30).nullable().describe("Officer's phone number").optional(),
  "roles": z.array(z.string()).describe("Officer's roles")
}
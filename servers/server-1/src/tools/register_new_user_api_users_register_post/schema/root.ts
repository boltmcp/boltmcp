import { z } from "zod"

export const inputParamsSchema = {
  "group": z.union([z.string(), z.null()]).optional(),
  "household": z.union([z.string(), z.null()]).optional(),
  "groupToken": z.union([z.string(), z.null()]).optional(),
  "email": z.string(),
  "username": z.string(),
  "fullName": z.string(),
  "password": z.string(),
  "passwordConfirm": z.string(),
  "advanced": z.boolean().optional(),
  "private": z.boolean().optional(),
  "seedData": z.boolean().optional(),
  "locale": z.string().optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}
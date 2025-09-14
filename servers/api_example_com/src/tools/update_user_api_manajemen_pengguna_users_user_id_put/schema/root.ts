import { z } from "zod"

export const inputParamsSchema = {
  "user_id": z.string(),
  "id": z.string(),
  "full_name": z.union([z.string(), z.null()]).optional(),
  "phone_number": z.union([z.string(), z.null()]).optional(),
  "preferred_language": z.union([z.string(), z.null()]).optional(),
  "last_login_at": z.union([z.string(), z.null()]).optional(),
  "role": z.union([z.string(), z.null()]).optional(),
  "plan_id": z.union([z.string(), z.null()]).optional(),
  "company": z.union([z.string(), z.null()]).optional(),
  "website": z.union([z.string(), z.null()]).optional(),
  "current_credits": z.union([z.number(), z.null()]).optional(),
  "email": z.union([z.string(), z.null()]).optional(),
  "referred_by": z.union([z.string(), z.null()]).optional(),
  "affiliate_active_until": z.union([z.string(), z.null()]).optional(),
  "authorization": z.string()
}
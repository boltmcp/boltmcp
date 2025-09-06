import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "biz_invite_id": z.union([z.string().uuid(), z.null()]).optional(),
  "biz_invite_link_id": z.union([z.string().uuid(), z.null()]).optional(),
  "biz_application": z.union([z.object({ "message": z.union([z.string().max(500), z.null()]).optional() }).describe("DTO for creating new BizApplication."), z.null()]).optional(),
  "aspect_ids": z.union([z.array(z.string().uuid()).max(10), z.null()]).describe("User owned aspect IDs to be sent with the request. When joining through invite/invite link, BizRelationAspects will be created. When sending an application, the aspect IDs will be stored, and application viewer will be able to see them.").optional(),
  "apply_with_email": z.union([z.object({ "email": z.string().email().describe("A verification link will be sent to the email. The email's domain must be allowed by the business.") }).describe("DTO for applying to a business with email."), z.null()]).describe("Required with `business.join_type=apply_domain`").optional()
}
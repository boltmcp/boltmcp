import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "biz_relation_id": z.union([z.string().uuid(), z.null()]).describe("The id of the BizRelation of the new owner. This is used when transferring ownership between app users. All other fields must be omitted when providing this field.").optional(),
  "biz_user_email": z.union([z.string().email(), z.null()]).describe("The email of the BizUser that will receive the ownership transfer request. This is used when transferring ownership to a biz user. The `message` field is optional when providing this field, but `biz_relation_id` must be omitted. The transfer request is available for 1 days.").optional(),
  "message": z.union([z.string().max(200), z.null()]).describe("Message to be included in the email sent to the new owner.").optional()
}
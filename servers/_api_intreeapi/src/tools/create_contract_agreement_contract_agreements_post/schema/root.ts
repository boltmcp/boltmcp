import { z } from "zod"

export const inputParamsSchema = {
  "obj_id": z.string().uuid().describe("The ID of the object that the agreement is for. For example, the ID of an app user for app TOS agreement."),
  "obj_type": z.enum(["app_user","biz_user"]).describe("Specifies the type of object associated with the obj_id."),
  "contract_type": z.enum(["app_tos","hub_tos","pack_purchase_contract"]).describe("The type of contract that the agreement is for.")
}
import { z } from "zod"

export const inputParamsSchema = {
  "contract_type": z.enum(["app_tos","hub_tos","pack_purchase_contract"]).describe("The type of contract to get. Will return the latest contract of this type.")
}
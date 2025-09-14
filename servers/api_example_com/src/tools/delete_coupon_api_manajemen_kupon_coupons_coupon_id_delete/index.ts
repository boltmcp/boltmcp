import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_coupon_api_manajemen_kupon_coupons_coupon_id_delete",
  "toolDescription": "Delete Coupon",
  "baseUrl": "https://api.example.com",
  "path": "/api/manajemen-kupon/coupons/{coupon_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "coupon_id": "coupon_id"
    },
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool
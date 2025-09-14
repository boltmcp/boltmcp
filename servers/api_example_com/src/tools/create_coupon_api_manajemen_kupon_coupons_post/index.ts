import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_coupon_api_manajemen_kupon_coupons_post",
  "toolDescription": "Create Coupon",
  "baseUrl": "https://api.example.com",
  "path": "/api/manajemen-kupon/coupons",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "credits_amount": "credits_amount",
      "is_multi_use": "is_multi_use",
      "campaign_code": "campaign_code",
      "quantity": "quantity"
    },
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "redeem_coupon_api_billing_redeem_coupon_post",
  "toolDescription": "Redeem Coupon",
  "baseUrl": "https://api.example.com",
  "path": "/api/billing/redeem-coupon",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "coupon_code": "coupon_code"
    },
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool
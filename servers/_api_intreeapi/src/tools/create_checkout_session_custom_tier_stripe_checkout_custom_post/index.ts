import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_checkout_session_custom_tier_stripe_checkout_custom_post",
  "toolDescription": "Create Checkout Session Custom Tier",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/stripe/checkout/custom",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "token": "token"
    }
  },
  inputParamsSchema
}

export default tool
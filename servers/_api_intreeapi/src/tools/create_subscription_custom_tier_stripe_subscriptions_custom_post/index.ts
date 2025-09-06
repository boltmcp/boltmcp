import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_subscription_custom_tier_stripe_subscriptions_custom_post",
  "toolDescription": "Create Subscription Custom Tier",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/stripe/subscriptions/custom",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "token": "token"
    },
    "body": {
      "email": "email",
      "name": "name",
      "phone": "phone",
      "address": "address"
    }
  },
  inputParamsSchema
}

export default tool
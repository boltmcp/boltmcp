import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_subscription_orgs_org_id_stripe_subscriptions_post",
  "toolDescription": "Create Subscription",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/orgs/{org_id}/stripe/subscriptions",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "org_id": "org_id"
    },
    "body": {
      "tier": "tier",
      "promo_code": "promo_code",
      "customer": "customer"
    }
  },
  inputParamsSchema
}

export default tool
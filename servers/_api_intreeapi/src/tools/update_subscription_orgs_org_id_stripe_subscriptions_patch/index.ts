import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_subscription_orgs_org_id_stripe_subscriptions_patch",
  "toolDescription": "Update Subscription",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/orgs/{org_id}/stripe/subscriptions",
  "method": "patch",
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
      "update_to_latest_payment_method": "update_to_latest_payment_method",
      "new_tier": "new_tier"
    }
  },
  inputParamsSchema
}

export default tool
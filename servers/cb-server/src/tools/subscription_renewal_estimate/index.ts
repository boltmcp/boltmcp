import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "subscription_renewal_estimate",
  "toolDescription": "Subscription renewal estimate",
  "baseUrl": "https://medimitra-test.chargebee.com/api/v2/",
  "path": "/subscriptions/{subscription-id}/renewal_estimate",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "path": {
      "subscription-id": "subscription-id"
    },
    "query": {
      "include_delayed_charges": "include_delayed_charges",
      "use_existing_balances": "use_existing_balances",
      "ignore_scheduled_cancellation": "ignore_scheduled_cancellation",
      "ignore_scheduled_changes": "ignore_scheduled_changes"
    },
    "header": {
      "chargebee-request-origin-device": "chargebee-request-origin-device",
      "chargebee-request-origin-user": "chargebee-request-origin-user",
      "chargebee-request-origin-user-encoded": "chargebee-request-origin-user-encoded",
      "chargebee-request-origin-ip": "chargebee-request-origin-ip",
      "chargebee-business-entity-id": "chargebee-business-entity-id"
    }
  },
  inputParamsSchema
}

export default tool
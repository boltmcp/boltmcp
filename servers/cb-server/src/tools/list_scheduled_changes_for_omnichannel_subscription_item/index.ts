import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_scheduled_changes_for_omnichannel_subscription_item",
  "toolDescription": "List scheduled changes for omnichannel subscription item",
  "baseUrl": "https://medimitra-test.chargebee.com/api/v2/",
  "path": "/omnichannel_subscription_items/{omnichannel-subscription-item-id}/scheduled_changes",
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
      "omnichannel-subscription-item-id": "omnichannel-subscription-item-id"
    },
    "query": {
      "limit": "limit",
      "offset": "offset"
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
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_attached_items",
  "toolDescription": "List attached items",
  "baseUrl": "https://medimitra-test.chargebee.com/api/v2/",
  "path": "/items/{item-id}/attached_items",
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
      "item-id": "item-id"
    },
    "query": {
      "limit": "limit",
      "offset": "offset",
      "id": "id",
      "item_id": "item_id",
      "type": "type",
      "item_type": "item_type",
      "charge_on_event": "charge_on_event",
      "updated_at": "updated_at"
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
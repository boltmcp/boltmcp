import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_usages",
  "toolDescription": "List usages",
  "baseUrl": "https://medimitra-test.chargebee.com/api/v2/",
  "path": "/usages",
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
    "query": {
      "limit": "limit",
      "offset": "offset",
      "id": "id",
      "subscription_id": "subscription_id",
      "usage_date": "usage_date",
      "updated_at": "updated_at",
      "item_price_id": "item_price_id",
      "invoice_id": "invoice_id",
      "source": "source",
      "sort_by": "sort_by"
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
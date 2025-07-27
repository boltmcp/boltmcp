import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_coupons",
  "toolDescription": "List coupons",
  "baseUrl": "https://medimitra-test.chargebee.com/api/v2/",
  "path": "/coupons",
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
      "name": "name",
      "discount_type": "discount_type",
      "duration_type": "duration_type",
      "status": "status",
      "apply_on": "apply_on",
      "created_at": "created_at",
      "updated_at": "updated_at",
      "sort_by": "sort_by",
      "currency_code": "currency_code"
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
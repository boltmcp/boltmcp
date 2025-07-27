import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_product_variants",
  "toolDescription": "List product variants",
  "baseUrl": "https://medimitra-test.chargebee.com/api/v2/",
  "path": "/products/{product-id}/variants",
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
      "product-id": "product-id"
    },
    "query": {
      "limit": "limit",
      "offset": "offset",
      "include_deleted": "include_deleted",
      "id": "id",
      "name": "name",
      "sku": "sku",
      "status": "status",
      "updated_at": "updated_at",
      "created_at": "created_at",
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
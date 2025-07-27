import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_pc2_migration_item_prices",
  "toolDescription": "List pc2 migration item prices",
  "baseUrl": "https://medimitra-test.chargebee.com/api/v2/",
  "path": "/pc2_migration_item_prices",
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
      "pc2_migration_id": "pc2_migration_id",
      "pc2_migration_item_id": "pc2_migration_item_id",
      "is_invalid_pc1_id": "is_invalid_pc1_id",
      "pc1_item_type": "pc1_item_type",
      "is_recurring": "is_recurring"
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
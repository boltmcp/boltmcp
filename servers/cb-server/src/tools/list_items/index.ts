import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_items",
  "toolDescription": "List items",
  "baseUrl": "https://medimitra-test.chargebee.com/api/v2/",
  "path": "/items",
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
      "item_family_id": "item_family_id",
      "type": "type",
      "name": "name",
      "item_applicability": "item_applicability",
      "status": "status",
      "is_giftable": "is_giftable",
      "updated_at": "updated_at",
      "enabled_for_checkout": "enabled_for_checkout",
      "enabled_in_portal": "enabled_in_portal",
      "metered": "metered",
      "usage_calculation": "usage_calculation",
      "channel": "channel",
      "business_entity_id": "business_entity_id",
      "include_site_level_resources": "include_site_level_resources",
      "sort_by": "sort_by",
      "bundle_configuration": "bundle_configuration"
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
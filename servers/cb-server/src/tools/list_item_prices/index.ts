import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_item_prices",
  "toolDescription": "List item prices",
  "baseUrl": "https://medimitra-test.chargebee.com/api/v2/",
  "path": "/item_prices",
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
      "pricing_model": "pricing_model",
      "item_id": "item_id",
      "item_family_id": "item_family_id",
      "item_type": "item_type",
      "currency_code": "currency_code",
      "price_variant_id": "price_variant_id",
      "trial_period": "trial_period",
      "trial_period_unit": "trial_period_unit",
      "status": "status",
      "updated_at": "updated_at",
      "business_entity_id": "business_entity_id",
      "include_site_level_resources": "include_site_level_resources",
      "period_unit": "period_unit",
      "period": "period",
      "channel": "channel",
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
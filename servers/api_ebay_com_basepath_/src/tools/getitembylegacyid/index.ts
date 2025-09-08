import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getitembylegacyid",
  "toolDescription": "This method is a bridge between the eBay legacy APIs, such as <b>Shopping</b> and <b>Finding</b>, and the eBay Buy APIs. There are differences between how legacy APIs and RESTful APIs return the identifier of an \"item\" and what the item ID",
  "baseUrl": "https://api.ebay.com{basePath}",
  "path": "/item/get_item_by_legacy_id",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "fieldgroups": "fieldgroups",
      "legacy_item_id": "legacy_item_id",
      "legacy_variation_id": "legacy_variation_id",
      "legacy_variation_sku": "legacy_variation_sku",
      "quantity_for_shipping_estimate": "quantity_for_shipping_estimate"
    },
    "header": {
      "X-EBAY-C-ENDUSERCTX": "X-EBAY-C-ENDUSERCTX",
      "X-EBAY-C-MARKETPLACE-ID": "X-EBAY-C-MARKETPLACE-ID",
      "Accept-Language": "Accept-Language"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getitem",
  "toolDescription": "This method retrieves the details of a specific item, such as description, price, category, all item aspects, condition, return policies, seller feedback and score, shipping options, shipping costs, estimated delivery, and other information",
  "baseUrl": "https://api.ebay.com{basePath}",
  "path": "/item/{item_id}",
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
    "path": {
      "item_id": "item_id"
    },
    "query": {
      "fieldgroups": "fieldgroups",
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
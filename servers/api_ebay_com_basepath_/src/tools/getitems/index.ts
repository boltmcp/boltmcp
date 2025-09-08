import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getitems",
  "toolDescription": "This method retrieves the details about specific items that buyers need to make a purchasing decision.<br><br><span class=\"tablenote\"><b>Note:</b> This is a <a href=\"/api-docs/static/versioning.html#limited \" target=\"_blank\"><img src=\"/cms/",
  "baseUrl": "https://api.ebay.com{basePath}",
  "path": "/item/",
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
      "item_ids": "item_ids",
      "item_group_ids": "item_group_ids",
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
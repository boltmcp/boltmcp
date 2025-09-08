import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getitemsbyitemgroup",
  "toolDescription": "This method retrieves details about individual items in an item group. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc.<br><br>You pass in the <b>item_group_id</b> as a URI parameter.",
  "baseUrl": "https://api.ebay.com{basePath}",
  "path": "/item/get_items_by_item_group",
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
      "item_group_id": "item_group_id",
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
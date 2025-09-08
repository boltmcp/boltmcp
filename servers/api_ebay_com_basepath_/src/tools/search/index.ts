import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "search",
  "toolDescription": "This method searches for eBay items by various query parameters and retrieves summaries of the items. You can search by keyword, category, eBay product ID (ePID), or GTIN, charity ID, or a combination of these.<br><br><span class=\"tablenote",
  "baseUrl": "https://api.ebay.com{basePath}",
  "path": "/item_summary/search",
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
      "aspect_filter": "aspect_filter",
      "auto_correct": "auto_correct",
      "category_ids": "category_ids",
      "charity_ids": "charity_ids",
      "compatibility_filter": "compatibility_filter",
      "epid": "epid",
      "fieldgroups": "fieldgroups",
      "filter": "filter",
      "gtin": "gtin",
      "limit": "limit",
      "offset": "offset",
      "q": "q",
      "sort": "sort"
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
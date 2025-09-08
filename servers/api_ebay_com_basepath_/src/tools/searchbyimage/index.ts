import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "searchbyimage",
  "toolDescription": "This method searches for eBay items based on a image and retrieves summaries of the items. You pass in a Base64 image in the request payload and can refine the search by category, or with other available filters.<br><br>To get the Base64 im",
  "baseUrl": "https://api.ebay.com{basePath}",
  "path": "/item_summary/search_by_image",
  "method": "post",
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
      "category_ids": "category_ids",
      "charity_ids": "charity_ids",
      "fieldgroups": "fieldgroups",
      "filter": "filter",
      "limit": "limit",
      "offset": "offset",
      "sort": "sort"
    },
    "body": {
      "image": "image"
    },
    "header": {
      "X-EBAY-C-ENDUSERCTX": "X-EBAY-C-ENDUSERCTX",
      "X-EBAY-C-MARKETPLACE-ID": "X-EBAY-C-MARKETPLACE-ID",
      "Content-Type": "Content-Type",
      "Accept-Language": "Accept-Language"
    }
  },
  inputParamsSchema
}

export default tool
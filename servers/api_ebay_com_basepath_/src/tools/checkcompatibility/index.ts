import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "checkcompatibility",
  "toolDescription": "This method checks if a product is compatible with the specified item. You can use this method to check the compatibility of cars, trucks, and motorcycles with a specific part listed on eBay.<br><br>For example, to check the compatibility o",
  "baseUrl": "https://api.ebay.com{basePath}",
  "path": "/item/{item_id}/check_compatibility",
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
    "path": {
      "item_id": "item_id"
    },
    "body": {
      "compatibilityProperties": "compatibilityProperties"
    },
    "header": {
      "X-EBAY-C-MARKETPLACE-ID": "X-EBAY-C-MARKETPLACE-ID",
      "Content-Type": "Content-Type",
      "Accept-Language": "Accept-Language"
    }
  },
  inputParamsSchema
}

export default tool
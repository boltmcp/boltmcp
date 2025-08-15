import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "superfundproviders_searchsuperfundproductsget",
  "toolDescription": "Searches for a list of super fund products that contain the specified search text.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/superfundProviders/products/search",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "body": {
      "searchText": "searchText",
      "first": "first"
    }
  },
  inputParamsSchema
}

export default tool
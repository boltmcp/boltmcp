import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "superfundproviders_searchsuperfundprovidersget",
  "toolDescription": "Searches for a list of super fund providers that contain the specified search text.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/superfundProviders/search",
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
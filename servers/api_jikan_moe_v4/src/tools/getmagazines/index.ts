import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getmagazines",
  "toolDescription": "",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/magazines",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "page": "page",
      "limit": "limit",
      "q": "q",
      "order_by": "order_by",
      "sort": "sort",
      "letter": "letter"
    }
  },
  inputParamsSchema
}

export default tool
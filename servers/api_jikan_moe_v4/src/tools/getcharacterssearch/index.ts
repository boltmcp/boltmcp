import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcharacterssearch",
  "toolDescription": "",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/characters",
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
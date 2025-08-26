import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getclubssearch",
  "toolDescription": "",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/clubs",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "page": "page",
      "limit": "limit",
      "q": "q",
      "type": "type",
      "category": "category",
      "order_by": "order_by",
      "sort": "sort",
      "letter": "letter"
    }
  },
  inputParamsSchema
}

export default tool
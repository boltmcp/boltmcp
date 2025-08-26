import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettopanime",
  "toolDescription": "",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/top/anime",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "type": "type",
      "filter": "filter",
      "rating": "rating",
      "sfw": "sfw",
      "page": "page",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool
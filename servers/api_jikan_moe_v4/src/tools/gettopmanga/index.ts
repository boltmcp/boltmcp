import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettopmanga",
  "toolDescription": "",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/top/manga",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "type": "type",
      "filter": "filter",
      "page": "page",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool
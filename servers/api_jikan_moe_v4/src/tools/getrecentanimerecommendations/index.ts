import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getrecentanimerecommendations",
  "toolDescription": "",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/recommendations/anime",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool
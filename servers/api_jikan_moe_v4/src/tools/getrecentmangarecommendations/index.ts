import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getrecentmangarecommendations",
  "toolDescription": "",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/recommendations/manga",
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
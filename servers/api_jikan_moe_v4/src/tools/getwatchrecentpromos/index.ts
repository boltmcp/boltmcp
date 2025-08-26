import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getwatchrecentpromos",
  "toolDescription": "",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/watch/promos",
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
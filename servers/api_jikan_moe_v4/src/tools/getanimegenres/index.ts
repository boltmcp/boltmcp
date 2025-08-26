import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getanimegenres",
  "toolDescription": "",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/genres/anime",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "filter": "filter"
    }
  },
  inputParamsSchema
}

export default tool
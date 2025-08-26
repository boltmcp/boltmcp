import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getmangagenres",
  "toolDescription": "",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/genres/manga",
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
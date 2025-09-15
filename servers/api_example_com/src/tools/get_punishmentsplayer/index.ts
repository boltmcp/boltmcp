import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_punishmentsplayer",
  "toolDescription": "Get punishments list of a player",
  "baseUrl": "https://api.example.com",
  "path": "/punishments/{player}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "player": "player"
    },
    "query": {
      "page": "page",
      "limit": "limit",
      "sort": "sort"
    }
  },
  inputParamsSchema
}

export default tool
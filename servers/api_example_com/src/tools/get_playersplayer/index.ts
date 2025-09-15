import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_playersplayer",
  "toolDescription": "Get player's survival server information",
  "baseUrl": "https://api.example.com",
  "path": "/survival/players/{player}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "player": "player"
    },
    "query": {
      "sort": "sort"
    }
  },
  inputParamsSchema
}

export default tool
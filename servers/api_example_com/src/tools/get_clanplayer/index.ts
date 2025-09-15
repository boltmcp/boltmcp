import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_clanplayer",
  "toolDescription": "Get player's clan information",
  "baseUrl": "https://api.example.com",
  "path": "/survival/clans/player/{player}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "player": "player"
    }
  },
  inputParamsSchema
}

export default tool
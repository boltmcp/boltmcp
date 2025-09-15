import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_discorduser",
  "toolDescription": "Get discord user id from player name",
  "baseUrl": "https://api.example.com",
  "path": "/discord/{player}",
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
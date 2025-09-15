import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_votesleaderboardplayer",
  "toolDescription": "Get vote count leaderboard data of a player",
  "baseUrl": "https://api.example.com",
  "path": "/leaderboard/votes/{player}",
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
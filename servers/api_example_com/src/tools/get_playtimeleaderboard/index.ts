import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_playtimeleaderboard",
  "toolDescription": "Get lobby playtime leaderboard",
  "baseUrl": "https://api.example.com",
  "path": "/leaderboard/lobby/playtime",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "page": "page",
      "limit": "limit",
      "sort": "sort",
      "search": "search"
    }
  },
  inputParamsSchema
}

export default tool
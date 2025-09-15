import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_votesleaderboard",
  "toolDescription": "Get vote count leaderboard",
  "baseUrl": "https://api.example.com",
  "path": "/leaderboard/votes",
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
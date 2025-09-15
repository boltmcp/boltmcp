import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_players",
  "toolDescription": "Get survival players information",
  "baseUrl": "https://api.example.com",
  "path": "/survival/players",
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
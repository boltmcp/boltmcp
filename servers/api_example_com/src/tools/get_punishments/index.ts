import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_punishments",
  "toolDescription": "Get latest punishments list",
  "baseUrl": "https://api.example.com",
  "path": "/punishments",
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
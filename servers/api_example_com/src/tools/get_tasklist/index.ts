import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_tasklist",
  "toolDescription": "List Tasks",
  "baseUrl": "https://api.example.com",
  "path": "/tasks",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "search": "search",
      "page": "page",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_clans",
  "toolDescription": "Get clans information the Survival server",
  "baseUrl": "https://api.example.com",
  "path": "/survival/clans",
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
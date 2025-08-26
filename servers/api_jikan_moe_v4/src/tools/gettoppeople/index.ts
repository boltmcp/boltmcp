import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettoppeople",
  "toolDescription": "",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/top/people",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "page": "page",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuserssearch",
  "toolDescription": "",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/users",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "page": "page",
      "limit": "limit",
      "q": "q",
      "gender": "gender",
      "location": "location",
      "maxAge": "maxAge",
      "minAge": "minAge"
    }
  },
  inputParamsSchema
}

export default tool
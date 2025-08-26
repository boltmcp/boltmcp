import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuserhistory",
  "toolDescription": "",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/users/{username}/history",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "username": "username"
    },
    "query": {
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool
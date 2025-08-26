import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuserfriends",
  "toolDescription": "",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/users/{username}/friends",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "username": "username"
    },
    "query": {
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool
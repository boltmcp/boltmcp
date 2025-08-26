import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuserfavorites",
  "toolDescription": "",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/users/{username}/favorites",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "username": "username"
    }
  },
  inputParamsSchema
}

export default tool
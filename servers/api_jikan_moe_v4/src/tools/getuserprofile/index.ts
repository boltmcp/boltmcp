import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuserprofile",
  "toolDescription": "",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/users/{username}",
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
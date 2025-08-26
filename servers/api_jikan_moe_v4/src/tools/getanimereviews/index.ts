import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getanimereviews",
  "toolDescription": "",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/anime/{id}/reviews",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "query": {
      "page": "page",
      "preliminary": "preliminary",
      "spoilers": "spoilers"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getrecentanimereviews",
  "toolDescription": "",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/reviews/anime",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "page": "page",
      "preliminary": "preliminary",
      "spoilers": "spoilers"
    }
  },
  inputParamsSchema
}

export default tool
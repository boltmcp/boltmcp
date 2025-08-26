import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettopreviews",
  "toolDescription": "",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/top/reviews",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "page": "page",
      "type": "type",
      "preliminary": "preliminary",
      "spoilers": "spoilers"
    }
  },
  inputParamsSchema
}

export default tool
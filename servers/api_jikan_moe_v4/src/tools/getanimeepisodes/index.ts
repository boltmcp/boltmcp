import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getanimeepisodes",
  "toolDescription": "",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/anime/{id}/episodes",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "query": {
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getmangatopics",
  "toolDescription": "",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/manga/{id}/forum",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "query": {
      "filter": "filter"
    }
  },
  inputParamsSchema
}

export default tool
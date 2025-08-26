import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getseason",
  "toolDescription": "",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/seasons/{year}/{season}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "year": "year",
      "season": "season"
    },
    "query": {
      "filter": "filter",
      "sfw": "sfw",
      "unapproved": "unapproved",
      "continuing": "continuing",
      "page": "page",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool
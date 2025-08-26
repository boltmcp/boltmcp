import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getseasonupcoming",
  "toolDescription": "",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/seasons/upcoming",
  "method": "get",
  "security": [],
  "paramsMap": {
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
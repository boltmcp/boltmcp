import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getschedules",
  "toolDescription": "",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/schedules",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "filter": "filter",
      "kids": "kids",
      "sfw": "sfw",
      "unapproved": "unapproved",
      "page": "page",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool
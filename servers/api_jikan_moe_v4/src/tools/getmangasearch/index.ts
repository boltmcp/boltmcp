import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getmangasearch",
  "toolDescription": "",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/manga",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "unapproved": "unapproved",
      "page": "page",
      "limit": "limit",
      "q": "q",
      "type": "type",
      "score": "score",
      "min_score": "min_score",
      "max_score": "max_score",
      "status": "status",
      "sfw": "sfw",
      "genres": "genres",
      "genres_exclude": "genres_exclude",
      "order_by": "order_by",
      "sort": "sort",
      "letter": "letter",
      "magazines": "magazines",
      "start_date": "start_date",
      "end_date": "end_date"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "search_categories_biz_categories_get",
  "toolDescription": "Search Categories",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/biz-categories",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "limit": "limit",
      "token": "token",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool
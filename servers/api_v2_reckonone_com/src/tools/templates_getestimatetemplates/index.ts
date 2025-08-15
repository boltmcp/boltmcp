import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "templates_getestimatetemplates",
  "toolDescription": "Gets a list of estimate templates for the specified book.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/templates/estimates",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "query": {
      "page": "page",
      "perPage": "perPage"
    }
  },
  inputParamsSchema
}

export default tool
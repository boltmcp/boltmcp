import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "industries_getindustrycategories",
  "toolDescription": "Gets a list of an industry's categories.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/industries/{industryId}/categories",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "industryId": "industryId"
    },
    "query": {
      "page": "page",
      "perPage": "perPage"
    }
  },
  inputParamsSchema
}

export default tool
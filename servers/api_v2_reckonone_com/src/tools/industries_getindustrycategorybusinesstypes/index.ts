import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "industries_getindustrycategorybusinesstypes",
  "toolDescription": "Gets a list of an industry category's business types.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/industries/{industryId}/categories/{categoryId}/businesstypes",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "industryId": "industryId",
      "categoryId": "categoryId"
    },
    "query": {
      "page": "page",
      "perPage": "perPage"
    }
  },
  inputParamsSchema
}

export default tool
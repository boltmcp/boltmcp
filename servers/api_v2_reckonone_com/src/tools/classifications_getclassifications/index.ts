import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "classifications_getclassifications",
  "toolDescription": "Gets a list of classifications.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/classifications",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "query": {
      "page": "page",
      "perPage": "perPage",
      "ExternalClientId": "ExternalClientId",
      "ExternalTenancyId": "ExternalTenancyId"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "tax_gettaxgroups",
  "toolDescription": "Gets a paged list of tax groups for the specified book.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/taxgroups/{effectiveDate}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "effectiveDate": "effectiveDate"
    },
    "query": {
      "page": "page",
      "perPage": "perPage"
    }
  },
  inputParamsSchema
}

export default tool
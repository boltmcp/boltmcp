import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "tax_gettaxrates",
  "toolDescription": "Gets tax rates as at the supplied effective date.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/taxrates/{effectiveDate}",
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
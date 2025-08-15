import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "banking_getfinancialinstitutions",
  "toolDescription": "Gets a list of financial institutions.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/banking/financialinstitutions",
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
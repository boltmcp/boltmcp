import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "expenseclaims_getexpenseclaim",
  "toolDescription": "Gets an expense claim.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/expenseclaims/{expenseClaimId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "expenseClaimId": "expenseClaimId"
    },
    "query": {
      "format": "format"
    }
  },
  inputParamsSchema
}

export default tool
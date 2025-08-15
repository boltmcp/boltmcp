import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "expenseclaims_addattachment",
  "toolDescription": "Attaches one or more documents to an expense claim line item.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/expenseclaims/{expenseClaimId}/lineitems/{lineItemId}/attachments",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "expenseClaimId": "expenseClaimId",
      "lineItemId": "lineItemId"
    },
    "query": {
      "fileName": "fileName"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "expenseclaims_deleteattachment",
  "toolDescription": "Deletes an attachment.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/expenseclaims/{expenseClaimId}/lineitems/{lineItemId}/attachments/{attachmentId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "expenseClaimId": "expenseClaimId",
      "lineItemId": "lineItemId",
      "attachmentId": "attachmentId"
    }
  },
  inputParamsSchema
}

export default tool
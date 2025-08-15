import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "banking_deletebankpaymentunprocessedpaymentlineitem",
  "toolDescription": "Deletes a line item of an unprocessed bank payment.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/banking/bankpayments/{bankPaymentId}/lineitems/{lineItemId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "bankPaymentId": "bankPaymentId",
      "lineItemId": "lineItemId"
    }
  },
  inputParamsSchema
}

export default tool
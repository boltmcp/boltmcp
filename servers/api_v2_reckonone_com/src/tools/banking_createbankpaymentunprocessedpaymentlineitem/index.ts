import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "banking_createbankpaymentunprocessedpaymentlineitem",
  "toolDescription": "Creates a line item for an unprocessed payment transaction to a bank payment.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/banking/bankpayments/{bankPaymentId}/lineitems",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "bankPaymentId": "bankPaymentId"
    },
    "body": {
      "paymentId": "paymentId"
    }
  },
  inputParamsSchema
}

export default tool
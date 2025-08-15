import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "banking_updatebankpayment",
  "toolDescription": "Updates an existing bank payment.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/banking/bankpayments/{bankPaymentId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "bankPaymentId": "bankPaymentId"
    },
    "body": {
      "paymentDate": "paymentDate",
      "reference": "reference",
      "lineItems": "lineItems",
      "treatWarningsAsErrors": "treatWarningsAsErrors"
    }
  },
  inputParamsSchema
}

export default tool
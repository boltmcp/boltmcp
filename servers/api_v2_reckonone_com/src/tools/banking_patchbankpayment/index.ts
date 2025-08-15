import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "banking_patchbankpayment",
  "toolDescription": "Updates selected fields of an existing bank payment.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/banking/bankpayments/{bankPaymentId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "bankPaymentId": "bankPaymentId"
    },
    "body": {
      "paymentDate": "paymentDate",
      "reference": "reference",
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "banking_deletebankpayment",
  "toolDescription": "Deletes a bank payment.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/banking/bankpayments/{bankPaymentId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "bankPaymentId": "bankPaymentId"
    }
  },
  inputParamsSchema
}

export default tool
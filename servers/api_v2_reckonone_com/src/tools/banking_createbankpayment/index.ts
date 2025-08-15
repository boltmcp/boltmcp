import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "banking_createbankpayment",
  "toolDescription": "Creates a bank payment.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/banking/bankpayments",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "body": {
      "ledgerAccount": "ledgerAccount",
      "paymentDate": "paymentDate",
      "reference": "reference",
      "lineItems": "lineItems",
      "treatWarningsAsErrors": "treatWarningsAsErrors",
      "ignoreWarnings": "ignoreWarnings"
    }
  },
  inputParamsSchema
}

export default tool
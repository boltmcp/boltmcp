import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "payments_addlineitemtopayment",
  "toolDescription": "Creates a new line item for a payment.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/payments/{paymentId}/lineitems",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "paymentId": "paymentId"
    },
    "body": {
      "lineNumber": "lineNumber",
      "project": "project",
      "itemDetails": "itemDetails",
      "accountDetails": "accountDetails",
      "description": "description",
      "taxRate": "taxRate",
      "taxAmount": "taxAmount"
    }
  },
  inputParamsSchema
}

export default tool
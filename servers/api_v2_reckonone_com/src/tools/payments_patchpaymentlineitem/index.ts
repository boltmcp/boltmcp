import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "payments_patchpaymentlineitem",
  "toolDescription": "Updates selected fields of an existing line item within an existing payment.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/payments/{paymentId}/lineitems/{lineId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "paymentId": "paymentId",
      "lineId": "lineId"
    },
    "body": {
      "lineNumber": "lineNumber",
      "project": "project",
      "itemDetails": "itemDetails",
      "accountDetails": "accountDetails",
      "description": "description",
      "taxAmount": "taxAmount",
      "taxRate": "taxRate"
    }
  },
  inputParamsSchema
}

export default tool
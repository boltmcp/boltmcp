import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "payments_deletepaymentlineitem",
  "toolDescription": "Deletes an existing payment's line item.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/payments/{paymentId}/lineitems/{lineId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "paymentId": "paymentId",
      "lineId": "lineId"
    }
  },
  inputParamsSchema
}

export default tool
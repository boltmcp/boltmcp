import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "payments_deletepayment",
  "toolDescription": "Deletes an existing payment.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/payments/{paymentId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "paymentId": "paymentId"
    }
  },
  inputParamsSchema
}

export default tool
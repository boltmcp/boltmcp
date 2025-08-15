import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "payments_deletepyamenttransactionlink",
  "toolDescription": "Deletes a payment's transaction link.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/payments/{paymentId}/transactionLinks/{linkId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "paymentId": "paymentId",
      "linkId": "linkId"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "banking_getbankpaymentsunprocessedpayments",
  "toolDescription": "Gets a list of payments not linked to a bank payment for a specific bank account.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/banking/bankpayments/unprocessedPayments/{ledgerAccountId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "ledgerAccountId": "ledgerAccountId"
    },
    "query": {
      "page": "page",
      "perPage": "perPage"
    }
  },
  inputParamsSchema
}

export default tool
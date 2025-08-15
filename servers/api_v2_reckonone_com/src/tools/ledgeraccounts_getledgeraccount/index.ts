import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "ledgeraccounts_getledgeraccount",
  "toolDescription": "Gets a ledger account.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/ledgeraccounts/{accountId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "accountId": "accountId"
    }
  },
  inputParamsSchema
}

export default tool
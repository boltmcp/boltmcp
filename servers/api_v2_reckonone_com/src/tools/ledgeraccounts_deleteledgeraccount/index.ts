import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "ledgeraccounts_deleteledgeraccount",
  "toolDescription": "Deletes an existing ledger account.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/ledgeraccounts/{ledgerAccountId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "ledgerAccountId": "ledgerAccountId"
    }
  },
  inputParamsSchema
}

export default tool
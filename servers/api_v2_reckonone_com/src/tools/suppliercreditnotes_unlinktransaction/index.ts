import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "suppliercreditnotes_unlinktransaction",
  "toolDescription": "Unlinks an existing transaction from a supplier credit note.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/suppliercreditnotes/{suppliercreditnoteId}/transactionlinks/{linkId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "suppliercreditnoteId": "suppliercreditnoteId",
      "linkId": "linkId"
    }
  },
  inputParamsSchema
}

export default tool
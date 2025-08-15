import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "journals_getjournallineitem",
  "toolDescription": "Gets a line item from an journal.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/journals/{journalId}/lineItems/{lineItemId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "journalId": "journalId",
      "lineItemId": "lineItemId"
    }
  },
  inputParamsSchema
}

export default tool
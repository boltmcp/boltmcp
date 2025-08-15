import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "journals_updatejournal",
  "toolDescription": "Updates an existing journal.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/journals/{journalId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "journalId": "journalId"
    },
    "body": {
      "summary": "summary",
      "journalDate": "journalDate",
      "amountTaxStatus": "amountTaxStatus",
      "description": "description",
      "adjustingJournal": "adjustingJournal",
      "lineItems": "lineItems"
    }
  },
  inputParamsSchema
}

export default tool
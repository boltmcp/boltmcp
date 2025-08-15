import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "journals_createjournal",
  "toolDescription": "Creates a new journal.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/journals",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
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
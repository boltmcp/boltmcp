import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "journals_reversejournal",
  "toolDescription": "Creates a reversing journal of an existing journal.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/journals/{journalId}/reverse",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "journalId": "journalId"
    },
    "body": {
      "summary": "summary",
      "journalDate": "journalDate",
      "description": "description"
    }
  },
  inputParamsSchema
}

export default tool
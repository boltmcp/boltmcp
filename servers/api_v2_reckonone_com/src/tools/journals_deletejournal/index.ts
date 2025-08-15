import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "journals_deletejournal",
  "toolDescription": "Deletes an existing journal.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/journals/{journalId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "journalId": "journalId"
    }
  },
  inputParamsSchema
}

export default tool
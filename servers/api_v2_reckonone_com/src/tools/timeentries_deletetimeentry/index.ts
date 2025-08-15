import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "timeentries_deletetimeentry",
  "toolDescription": "Deletes an existing time entry.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/timeEntries/{timeEntryId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "timeEntryId": "timeEntryId"
    }
  },
  inputParamsSchema
}

export default tool
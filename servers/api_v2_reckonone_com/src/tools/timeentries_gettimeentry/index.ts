import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "timeentries_gettimeentry",
  "toolDescription": "Gets a time entry.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/timeEntries/{timeEntryId}",
  "method": "get",
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
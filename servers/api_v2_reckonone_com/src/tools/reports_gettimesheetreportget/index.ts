import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reports_gettimesheetreportget",
  "toolDescription": "Gets the timesheet report.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/reports/timeEntriesDetail",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "query": {
      "parameters": "parameters",
      "format": "format",
      "download": "download"
    }
  },
  inputParamsSchema
}

export default tool
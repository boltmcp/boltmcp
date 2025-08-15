import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "settings_patchtimeentrysettings",
  "toolDescription": "Updates selected fields of a book's time entry settings.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/settings/timeEntries",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "body": {
      "approvalEnabled": "approvalEnabled",
      "firstDayOfWeek": "firstDayOfWeek",
      "transferBillableTimeAs": "transferBillableTimeAs"
    }
  },
  inputParamsSchema
}

export default tool
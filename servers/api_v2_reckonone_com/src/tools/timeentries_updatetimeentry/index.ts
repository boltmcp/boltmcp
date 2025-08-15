import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "timeentries_updatetimeentry",
  "toolDescription": "Updates an existing time entry.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/timeEntries/{timeEntryId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "timeEntryId": "timeEntryId"
    },
    "body": {
      "employee": "employee",
      "timeEntryDate": "timeEntryDate",
      "project": "project",
      "customer": "customer",
      "classification": "classification",
      "billable": "billable",
      "item": "item",
      "payrollItem": "payrollItem",
      "time": "time",
      "notes": "notes",
      "declineReason": "declineReason"
    }
  },
  inputParamsSchema
}

export default tool
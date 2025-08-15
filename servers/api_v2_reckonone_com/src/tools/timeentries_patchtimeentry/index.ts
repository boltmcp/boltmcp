import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "timeentries_patchtimeentry",
  "toolDescription": "Updates selected fields of a time entry.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/timeentries/{timeEntryId}",
  "method": "patch",
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
      "approvalStatus": "approvalStatus",
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
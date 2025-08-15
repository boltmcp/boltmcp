import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "invoiceremindertemplates_updateinvoicesremindertemplate",
  "toolDescription": "Updates an invoice reminder template.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/invoiceremindertemplates/{templateId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "templateId": "templateId"
    },
    "body": {
      "daysToRemindAfter": "daysToRemindAfter",
      "invoiceEmail": "invoiceEmail"
    }
  },
  inputParamsSchema
}

export default tool
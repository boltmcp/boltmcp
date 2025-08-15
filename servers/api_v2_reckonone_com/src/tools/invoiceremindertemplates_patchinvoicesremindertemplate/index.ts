import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "invoiceremindertemplates_patchinvoicesremindertemplate",
  "toolDescription": "Update an invoice reminder template.\n\n`POST /5af6572c-9771-4b86-995d-3374d3bc683c/invoiceremindertemplates`",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/invoiceremindertemplates/{templateId}",
  "method": "patch",
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
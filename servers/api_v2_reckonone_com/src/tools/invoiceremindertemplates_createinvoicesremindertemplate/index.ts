import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "invoiceremindertemplates_createinvoicesremindertemplate",
  "toolDescription": "Create a new invoice reminder template.\n\n`POST /5af6572c-9771-4b86-995d-3374d3bc683c/invoiceremindertemplates`",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/invoiceremindertemplates",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "body": {
      "daysToRemindAfter": "daysToRemindAfter",
      "invoiceEmail": "invoiceEmail"
    }
  },
  inputParamsSchema
}

export default tool
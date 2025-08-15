import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "invoiceremindertemplates_getinvoiceremindertemplate",
  "toolDescription": "Get a particular invoice reminder template.\n\n`GET /5af6572c-9771-4b86-995d-3374d3bc683c/invoiceremindertemplates/b696b9f5-e1e7-41f1-9f44-fa047e5e9ad2`\n\n---\n\nGet just the required fields, e.g. id and total amount. Find out more about [select",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/invoiceremindertemplates/{templateId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "templateId": "templateId"
    }
  },
  inputParamsSchema
}

export default tool
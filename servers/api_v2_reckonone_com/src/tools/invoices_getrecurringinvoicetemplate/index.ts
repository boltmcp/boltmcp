import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "invoices_getrecurringinvoicetemplate",
  "toolDescription": "Gets a recurring invoice template.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/invoices/recurringTemplates/{templateId}",
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
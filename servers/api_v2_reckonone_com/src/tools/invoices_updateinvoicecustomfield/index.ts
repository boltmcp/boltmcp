import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "invoices_updateinvoicecustomfield",
  "toolDescription": "Updates an existing invoice custom field.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/invoices/{invoiceId}/customFields/{type}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "invoiceId": "invoiceId",
      "type": "type"
    },
    "body": {
      "value": "value"
    }
  },
  inputParamsSchema
}

export default tool
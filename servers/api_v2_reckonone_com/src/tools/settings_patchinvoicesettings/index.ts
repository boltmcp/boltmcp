import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "settings_patchinvoicesettings",
  "toolDescription": "Updates selected fields of a book's invoice settings.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/settings/invoice",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "body": {
      "approvalEnabled": "approvalEnabled",
      "prefix": "prefix",
      "defaultTemplate": "defaultTemplate",
      "nextInvoiceNumber": "nextInvoiceNumber",
      "defaultPaymentDetails": "defaultPaymentDetails",
      "serviceDateOnInvoice": "serviceDateOnInvoice",
      "emailSettings": "emailSettings",
      "defaultLineItemAccount": "defaultLineItemAccount"
    }
  },
  inputParamsSchema
}

export default tool
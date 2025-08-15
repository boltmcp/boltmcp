import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "invoices_patchinvoiceattachment",
  "toolDescription": "Updates shareable state of an attachment for an existing invoice.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/invoices/{invoiceId}/attachments/{attachmentId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "invoiceId": "invoiceId",
      "attachmentId": "attachmentId"
    },
    "body": {
      "isShareable": "isShareable"
    }
  },
  inputParamsSchema
}

export default tool
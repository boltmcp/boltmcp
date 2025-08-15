import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "invoices_emailinvoice",
  "toolDescription": "Emails an existing invoice.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/invoices/{invoiceId}/email",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "invoiceId": "invoiceId"
    },
    "body": {
      "toAddresses": "toAddresses",
      "ccAddresses": "ccAddresses",
      "bccAddresses": "bccAddresses",
      "subject": "subject",
      "body": "body",
      "documentNumber": "documentNumber"
    }
  },
  inputParamsSchema
}

export default tool
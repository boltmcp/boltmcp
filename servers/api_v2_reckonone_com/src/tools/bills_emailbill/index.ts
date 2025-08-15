import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "bills_emailbill",
  "toolDescription": "Emails an existing bill.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/bills/{billId}/email",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "billId": "billId"
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
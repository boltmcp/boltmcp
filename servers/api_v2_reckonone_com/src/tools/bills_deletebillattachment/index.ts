import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "bills_deletebillattachment",
  "toolDescription": "Deletes an attachment of a bill.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/bills/{billId}/attachments/{attachmentId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "billId": "billId",
      "attachmentId": "attachmentId"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "estimates_emailestimate",
  "toolDescription": "Emails an existing estimate.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/estimates/{estimateId}/email",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "estimateId": "estimateId"
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
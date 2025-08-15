import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "bills_getpopulatedemail",
  "toolDescription": "Gets an email template populated with details from the specified bill.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/bills/{billId}/email",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "billId": "billId"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "bills_deletebill",
  "toolDescription": "Deletes an existing bill.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/bills/{billId}",
  "method": "delete",
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
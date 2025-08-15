import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "bills_deletetransactionlink",
  "toolDescription": "Deletes an existing transaction link.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/bills/{billId}/transactionlinks/{linkId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "billId": "billId",
      "linkId": "linkId"
    }
  },
  inputParamsSchema
}

export default tool
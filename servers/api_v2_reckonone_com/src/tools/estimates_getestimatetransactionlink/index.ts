import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "estimates_getestimatetransactionlink",
  "toolDescription": "Gets an existing estimate's linked transaction.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/estimates/{estimateId}/transactionLinks/{linkId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "estimateId": "estimateId",
      "linkId": "linkId"
    }
  },
  inputParamsSchema
}

export default tool
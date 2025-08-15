import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "estimates_getestimatelineitem",
  "toolDescription": "Gets a line item from an estimate.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/estimates/{estimateId}/lineItems/{lineItemId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "estimateId": "estimateId",
      "lineItemId": "lineItemId"
    }
  },
  inputParamsSchema
}

export default tool
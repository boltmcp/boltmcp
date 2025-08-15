import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "superstreams_linksuperstreamlineitem",
  "toolDescription": "Creates a new superstream line item.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/superstreams/{superstreamId}/lineitems",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "superstreamId": "superstreamId"
    },
    "body": {
      "payrunSuperLineId": "payrunSuperLineId"
    }
  },
  inputParamsSchema
}

export default tool
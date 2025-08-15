import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "superstreams_deletelineitem",
  "toolDescription": "Deletes an existing line item.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/superstreams/{superstreamId}/lineitems/{payrunSuperLineId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "superstreamId": "superstreamId",
      "payrunSuperLineId": "payrunSuperLineId"
    }
  },
  inputParamsSchema
}

export default tool
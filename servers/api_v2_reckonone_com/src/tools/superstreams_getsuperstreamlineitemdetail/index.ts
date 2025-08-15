import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "superstreams_getsuperstreamlineitemdetail",
  "toolDescription": "Gets the details of a superstream line item.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/superstreams/{superStreamId}/lineItems/{payrunSuperLineId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "superStreamId": "superStreamId",
      "payrunSuperLineId": "payrunSuperLineId"
    }
  },
  inputParamsSchema
}

export default tool
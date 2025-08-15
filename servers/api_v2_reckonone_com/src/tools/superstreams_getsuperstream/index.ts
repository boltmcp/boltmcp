import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "superstreams_getsuperstream",
  "toolDescription": "Gets a superstream batch.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/superstreams/{superstreamId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "superstreamId": "superstreamId"
    }
  },
  inputParamsSchema
}

export default tool
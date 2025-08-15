import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "superstreams_getsuperstreams",
  "toolDescription": "Gets a list of superstream batches.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/superstreams",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    }
  },
  inputParamsSchema
}

export default tool
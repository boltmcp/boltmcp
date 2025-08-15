import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "phonetypes_getphonetypes",
  "toolDescription": "Gets a list of phone types.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/phonetypes",
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
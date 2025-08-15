import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addresstypes_getaddresstypes",
  "toolDescription": "Gets a list of address types.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/addresstypes",
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
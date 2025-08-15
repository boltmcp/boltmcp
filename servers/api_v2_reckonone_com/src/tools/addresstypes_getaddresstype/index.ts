import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addresstypes_getaddresstype",
  "toolDescription": "Gets an address type.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/addresstypes/{addressTypeId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "addressTypeId": "addressTypeId"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addresstypes_updateaddresstype",
  "toolDescription": "Updates an existing address type.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/addresstypes/{addressTypeId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "addressTypeId": "addressTypeId"
    },
    "body": {
      "name": "name",
      "description": "description",
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool
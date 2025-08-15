import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "phonetypes_updatephonetype",
  "toolDescription": "Updates an existing phone type.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/phonetypes/{phoneTypeId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "phoneTypeId": "phoneTypeId"
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
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "phonetypes_deletephonetype",
  "toolDescription": "Deletes an existing phone type.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/phonetypes/{phoneTypeId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "phoneTypeId": "phoneTypeId"
    }
  },
  inputParamsSchema
}

export default tool
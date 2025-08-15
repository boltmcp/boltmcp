import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "phonetypes_getphonetype",
  "toolDescription": "Gets a phone type.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/phonetypes/{phoneTypeId}",
  "method": "get",
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
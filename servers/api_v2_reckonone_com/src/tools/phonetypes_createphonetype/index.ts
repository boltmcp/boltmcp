import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "phonetypes_createphonetype",
  "toolDescription": "Creates a new phone type.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/phonetypes",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
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
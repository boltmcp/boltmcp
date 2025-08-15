import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "templates_getexpenseclaimsstemplate",
  "toolDescription": "Gets an expense claim template for the specified book.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/templates/expenseclaims/{templateId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "templateId": "templateId"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "templates_gettemplateheaderimage",
  "toolDescription": "Gets a template's header image for the specified book.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/templates/{templateId}/headerImage",
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
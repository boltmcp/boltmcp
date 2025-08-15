import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "paytemplates_getpaytemplateearnings",
  "toolDescription": "Gets a list of pay template earnings for the specified book.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/paytemplates/{payTemplateId}/earnings",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "payTemplateId": "payTemplateId"
    },
    "query": {
      "page": "page",
      "perPage": "perPage"
    }
  },
  inputParamsSchema
}

export default tool
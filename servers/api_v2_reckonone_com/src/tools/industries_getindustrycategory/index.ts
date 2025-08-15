import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "industries_getindustrycategory",
  "toolDescription": "Gets an industry's category.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/industries/{industryId}/categories/{categoryId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "industryId": "industryId",
      "categoryId": "categoryId"
    }
  },
  inputParamsSchema
}

export default tool
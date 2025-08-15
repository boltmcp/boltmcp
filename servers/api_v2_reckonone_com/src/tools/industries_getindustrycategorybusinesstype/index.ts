import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "industries_getindustrycategorybusinesstype",
  "toolDescription": "Gets an industry category's business type.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/industries/{industryId}/categories/{categoryId}/businesstypes/{businessTypeId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "industryId": "industryId",
      "categoryId": "categoryId",
      "businessTypeId": "businessTypeId"
    }
  },
  inputParamsSchema
}

export default tool
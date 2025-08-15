import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "industries_getindustry",
  "toolDescription": "Gets an industry.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/industries/{industryId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "industryId": "industryId"
    }
  },
  inputParamsSchema
}

export default tool
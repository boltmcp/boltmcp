import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "industries_getindustries",
  "toolDescription": "Get a list of industries.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/industries",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "page": "page",
      "perPage": "perPage"
    }
  },
  inputParamsSchema
}

export default tool
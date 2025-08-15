import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "industries_getbusinesstypes",
  "toolDescription": "Gets a list of business types.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/businesstypes",
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
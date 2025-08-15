import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "statutoryrate_getsuperstatutoryrates",
  "toolDescription": "Gets a list of super statutory rates.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/statutoryrate/super",
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
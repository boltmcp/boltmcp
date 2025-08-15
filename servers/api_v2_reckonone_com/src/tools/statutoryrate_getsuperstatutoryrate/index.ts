import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "statutoryrate_getsuperstatutoryrate",
  "toolDescription": "Gets a super statutory rate.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/statutoryrate/super/date",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "basedate": "basedate"
    }
  },
  inputParamsSchema
}

export default tool
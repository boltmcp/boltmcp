import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getwars",
  "toolDescription": "List wars",
  "baseUrl": "https://esi.evetech.net",
  "path": "/wars",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "max_war_id": "max_war_id"
    },
    "header": {
      "Accept-Language": "Accept-Language",
      "If-None-Match": "If-None-Match",
      "X-Compatibility-Date": "X-Compatibility-Date",
      "X-Tenant": "X-Tenant"
    }
  },
  inputParamsSchema
}

export default tool
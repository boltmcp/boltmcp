import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getwarswaridkillmails",
  "toolDescription": "List kills for a war",
  "baseUrl": "https://esi.evetech.net",
  "path": "/wars/{war_id}/killmails",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "war_id": "war_id"
    },
    "query": {
      "page": "page"
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
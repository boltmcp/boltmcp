import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getmarketsgroupsmarketgroupid",
  "toolDescription": "Get item group information",
  "baseUrl": "https://esi.evetech.net",
  "path": "/markets/groups/{market_group_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "market_group_id": "market_group_id"
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
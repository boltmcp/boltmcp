import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getmarketsregionidhistory",
  "toolDescription": "List historical market statistics in a region",
  "baseUrl": "https://esi.evetech.net",
  "path": "/markets/{region_id}/history",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "region_id": "region_id"
    },
    "query": {
      "type_id": "type_id"
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
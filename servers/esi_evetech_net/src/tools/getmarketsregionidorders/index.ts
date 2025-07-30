import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getmarketsregionidorders",
  "toolDescription": "List orders in a region",
  "baseUrl": "https://esi.evetech.net",
  "path": "/markets/{region_id}/orders",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "region_id": "region_id"
    },
    "query": {
      "order_type": "order_type",
      "page": "page",
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
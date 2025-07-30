import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getmarketsregionidtypes",
  "toolDescription": "List type IDs relevant to a market",
  "baseUrl": "https://esi.evetech.net",
  "path": "/markets/{region_id}/types",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "region_id": "region_id"
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
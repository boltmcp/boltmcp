import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcontractspublicitemscontractid",
  "toolDescription": "Get public contract items",
  "baseUrl": "https://esi.evetech.net",
  "path": "/contracts/public/items/{contract_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "contract_id": "contract_id"
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
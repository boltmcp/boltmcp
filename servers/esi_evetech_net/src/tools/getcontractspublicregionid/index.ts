import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcontractspublicregionid",
  "toolDescription": "Get public contracts",
  "baseUrl": "https://esi.evetech.net",
  "path": "/contracts/public/{region_id}",
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
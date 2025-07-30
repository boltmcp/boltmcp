import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuniverseregionsregionid",
  "toolDescription": "Get region information",
  "baseUrl": "https://esi.evetech.net",
  "path": "/universe/regions/{region_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "region_id": "region_id"
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
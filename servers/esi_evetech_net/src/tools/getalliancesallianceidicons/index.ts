import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getalliancesallianceidicons",
  "toolDescription": "Get alliance icon",
  "baseUrl": "https://esi.evetech.net",
  "path": "/alliances/{alliance_id}/icons",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "alliance_id": "alliance_id"
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
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcorporationscorporationidicons",
  "toolDescription": "Get corporation icon",
  "baseUrl": "https://esi.evetech.net",
  "path": "/corporations/{corporation_id}/icons",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "corporation_id": "corporation_id"
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
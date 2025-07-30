import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcorporationscorporationid",
  "toolDescription": "Get corporation information",
  "baseUrl": "https://esi.evetech.net",
  "path": "/corporations/{corporation_id}",
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
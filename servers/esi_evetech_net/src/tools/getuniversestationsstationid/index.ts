import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuniversestationsstationid",
  "toolDescription": "Get station information",
  "baseUrl": "https://esi.evetech.net",
  "path": "/universe/stations/{station_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "station_id": "station_id"
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
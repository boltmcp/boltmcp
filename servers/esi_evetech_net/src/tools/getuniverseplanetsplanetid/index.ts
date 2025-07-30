import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuniverseplanetsplanetid",
  "toolDescription": "Get planet information",
  "baseUrl": "https://esi.evetech.net",
  "path": "/universe/planets/{planet_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "planet_id": "planet_id"
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
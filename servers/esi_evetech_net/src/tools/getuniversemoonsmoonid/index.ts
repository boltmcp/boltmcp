import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuniversemoonsmoonid",
  "toolDescription": "Get moon information",
  "baseUrl": "https://esi.evetech.net",
  "path": "/universe/moons/{moon_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "moon_id": "moon_id"
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
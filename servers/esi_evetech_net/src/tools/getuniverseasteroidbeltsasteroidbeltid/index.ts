import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuniverseasteroidbeltsasteroidbeltid",
  "toolDescription": "Get asteroid belt information",
  "baseUrl": "https://esi.evetech.net",
  "path": "/universe/asteroid_belts/{asteroid_belt_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "asteroid_belt_id": "asteroid_belt_id"
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
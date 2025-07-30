import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuniversegraphicsgraphicid",
  "toolDescription": "Get graphic information",
  "baseUrl": "https://esi.evetech.net",
  "path": "/universe/graphics/{graphic_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "graphic_id": "graphic_id"
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
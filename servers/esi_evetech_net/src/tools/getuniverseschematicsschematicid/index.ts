import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuniverseschematicsschematicid",
  "toolDescription": "Get schematic information",
  "baseUrl": "https://esi.evetech.net",
  "path": "/universe/schematics/{schematic_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "schematic_id": "schematic_id"
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
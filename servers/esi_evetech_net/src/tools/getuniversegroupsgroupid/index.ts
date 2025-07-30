import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuniversegroupsgroupid",
  "toolDescription": "Get item group information",
  "baseUrl": "https://esi.evetech.net",
  "path": "/universe/groups/{group_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "group_id": "group_id"
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
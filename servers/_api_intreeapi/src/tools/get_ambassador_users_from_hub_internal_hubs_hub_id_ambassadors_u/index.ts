import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_ambassador_users_from_hub_internal_hubs_hub_id_ambassadors_u",
  "toolDescription": "Get Ambassador Users From Hub",
  "baseUrl": "/api/intreeapi",
  "path": "/internal/hubs/{hub_id}/ambassadors/users",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "hub_id": "hub_id"
    }
  },
  inputParamsSchema
}

export default tool
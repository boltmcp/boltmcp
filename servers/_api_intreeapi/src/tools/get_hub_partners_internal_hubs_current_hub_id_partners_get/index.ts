import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_hub_partners_internal_hubs_current_hub_id_partners_get",
  "toolDescription": "Get Hub Partners",
  "baseUrl": "/api/intreeapi",
  "path": "/internal/hubs/{current_hub_id}/partners",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "current_hub_id": "current_hub_id"
    },
    "query": {
      "hub_id": "hub_id"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_alarms_api_alarms_get",
  "toolDescription": "List all alarms MEGA OTIMIZADO",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/alarms/",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "page": "page",
      "per_page": "per_page",
      "tag_id": "tag_id",
      "alarm_type": "alarm_type",
      "status": "status",
      "active_only": "active_only"
    }
  },
  inputParamsSchema
}

export default tool
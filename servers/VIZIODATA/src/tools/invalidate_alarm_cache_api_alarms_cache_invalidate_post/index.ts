import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "invalidate_alarm_cache_api_alarms_cache_invalidate_post",
  "toolDescription": "Invalidate alarm cache",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/alarms/cache/invalidate",
  "method": "post",
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
      "tag_id": "tag_id",
      "alarm_type": "alarm_type",
      "condition": "condition"
    }
  },
  inputParamsSchema
}

export default tool
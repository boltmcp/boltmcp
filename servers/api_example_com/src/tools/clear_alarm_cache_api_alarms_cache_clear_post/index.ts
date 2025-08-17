import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "clear_alarm_cache_api_alarms_cache_clear_post",
  "toolDescription": "Clear alarm cache",
  "baseUrl": "https://api.example.com",
  "path": "/api/alarms/cache/clear",
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
      "tag_id": "tag_id"
    }
  },
  inputParamsSchema
}

export default tool
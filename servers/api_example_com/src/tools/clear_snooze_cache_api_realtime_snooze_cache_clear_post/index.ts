import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "clear_snooze_cache_api_realtime_snooze_cache_clear_post",
  "toolDescription": "Clear alarm snooze cache",
  "baseUrl": "https://api.example.com",
  "path": "/api/realtime/snooze-cache/clear",
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
      "clear_expired_only": "clear_expired_only"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_snooze_cache_info_api_realtime_snooze_cache_get",
  "toolDescription": "Alarm snooze cache information",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/realtime/snooze-cache",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool
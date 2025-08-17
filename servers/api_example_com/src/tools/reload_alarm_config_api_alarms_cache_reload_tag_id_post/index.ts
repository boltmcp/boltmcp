import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reload_alarm_config_api_alarms_cache_reload_tag_id_post",
  "toolDescription": "Reload alarm config",
  "baseUrl": "https://api.example.com",
  "path": "/api/alarms/cache/reload/{tag_id}",
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
    "path": {
      "tag_id": "tag_id"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "preview_totalization_windows_api_sensor_totalization_windows_pre",
  "toolDescription": "Preview totalization windows",
  "baseUrl": "https://api.example.com",
  "path": "/api/sensor-totalization/windows/preview/{config_id}",
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
    "path": {
      "config_id": "config_id"
    },
    "query": {
      "preview_days": "preview_days"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_window_preview_api_totalization_windows_api_sensor_totalizat",
  "toolDescription": "Get Window Preview",
  "baseUrl": "https://api.example.com",
  "path": "/api/totalization-windows/api/sensor-totalization/windows/preview/{config_id}",
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
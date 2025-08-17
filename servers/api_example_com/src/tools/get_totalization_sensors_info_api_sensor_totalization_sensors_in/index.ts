import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_totalization_sensors_info_api_sensor_totalization_sensors_in",
  "toolDescription": "Informações dos sensores de totalização criados automaticamente",
  "baseUrl": "https://api.example.com",
  "path": "/api/sensor-totalization/sensors-info",
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
      "config_id": "config_id",
      "include_stats": "include_stats",
      "active_only": "active_only",
      "limit": "limit",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool
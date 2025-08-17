import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_sensor_data_cache_stats_api_sensor_data_cache_sensor_data_st",
  "toolDescription": "Get sensor data cache statistics",
  "baseUrl": "https://api.example.com",
  "path": "/api/sensor-data/cache/sensor-data/stats",
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
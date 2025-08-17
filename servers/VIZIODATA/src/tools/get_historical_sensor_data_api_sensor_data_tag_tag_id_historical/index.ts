import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_historical_sensor_data_api_sensor_data_tag_tag_id_historical",
  "toolDescription": "Get aggregated historical sensor data",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/sensor-data/tag/{tag_id}/historical-data",
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
      "tag_id": "tag_id"
    },
    "query": {
      "start_time": "start_time",
      "end_time": "end_time",
      "aggregation": "aggregation",
      "limit": "limit",
      "chart_mode": "chart_mode",
      "require_totalization": "require_totalization"
    }
  },
  inputParamsSchema
}

export default tool
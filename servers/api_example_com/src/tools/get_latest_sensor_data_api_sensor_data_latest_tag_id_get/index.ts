import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_latest_sensor_data_api_sensor_data_latest_tag_id_get",
  "toolDescription": "Get latest sensor data for tag",
  "baseUrl": "https://api.example.com",
  "path": "/api/sensor-data/latest/{tag_id}",
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
      "chart_mode": "chart_mode"
    }
  },
  inputParamsSchema
}

export default tool
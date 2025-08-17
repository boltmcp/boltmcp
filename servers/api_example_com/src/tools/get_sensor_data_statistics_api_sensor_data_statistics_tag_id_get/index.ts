import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_sensor_data_statistics_api_sensor_data_statistics_tag_id_get",
  "toolDescription": "Get statistics for tag",
  "baseUrl": "https://api.example.com",
  "path": "/api/sensor-data/statistics/{tag_id}",
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
      "end_time": "end_time"
    }
  },
  inputParamsSchema
}

export default tool
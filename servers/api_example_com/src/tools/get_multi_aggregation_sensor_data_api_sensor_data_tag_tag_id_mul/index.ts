import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_multi_aggregation_sensor_data_api_sensor_data_tag_tag_id_mul",
  "toolDescription": "Get sensor data with multiple aggregation levels",
  "baseUrl": "https://api.example.com",
  "path": "/api/sensor-data/tag/{tag_id}/multi-aggregation",
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
      "aggregations": "aggregations",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool
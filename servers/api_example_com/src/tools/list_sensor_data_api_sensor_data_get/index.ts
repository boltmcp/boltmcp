import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_sensor_data_api_sensor_data_get",
  "toolDescription": "List sensor data",
  "baseUrl": "https://api.example.com",
  "path": "/api/sensor-data/",
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
      "tag_ids": "tag_ids",
      "start_time": "start_time",
      "end_time": "end_time",
      "quality": "quality",
      "source": "source",
      "limit": "limit",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_sensor_data_api_sensor_data_post",
  "toolDescription": "Send sensor data via MQTT",
  "baseUrl": "https://api.example.com",
  "path": "/api/sensor-data/",
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
    "query": {
      "use_mqtt": "use_mqtt"
    },
    "body": {
      "tag_id": "tag_id",
      "value": "value",
      "timestamp": "timestamp",
      "quality": "quality",
      "source": "source"
    }
  },
  inputParamsSchema
}

export default tool
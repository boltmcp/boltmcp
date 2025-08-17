import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_sensor_data_batch_api_sensor_data_batch_post",
  "toolDescription": "Send multiple sensor data records via MQTT",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/sensor-data/batch",
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
      "data": "data"
    }
  },
  inputParamsSchema
}

export default tool
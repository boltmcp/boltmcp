import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_sensor_data_api_sensor_data_data_id_delete",
  "toolDescription": "Delete sensor data record",
  "baseUrl": "https://api.example.com",
  "path": "/api/sensor-data/{data_id}",
  "method": "delete",
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
      "data_id": "data_id"
    }
  },
  inputParamsSchema
}

export default tool
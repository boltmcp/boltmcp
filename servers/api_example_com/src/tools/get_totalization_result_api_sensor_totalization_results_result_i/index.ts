import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_totalization_result_api_sensor_totalization_results_result_i",
  "toolDescription": "Obter resultado específico de totalização",
  "baseUrl": "https://api.example.com",
  "path": "/api/sensor-totalization/results/{result_id}",
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
      "result_id": "result_id"
    }
  },
  inputParamsSchema
}

export default tool
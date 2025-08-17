import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "execute_totalization_api_sensor_totalization_execute_post",
  "toolDescription": "Executar totalização manualmente",
  "baseUrl": "https://api.example.com",
  "path": "/api/sensor-totalization/execute",
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
    "body": {
      "config_ids": "config_ids",
      "force_execution": "force_execution",
      "custom_period_start": "custom_period_start",
      "custom_period_end": "custom_period_end"
    }
  },
  inputParamsSchema
}

export default tool
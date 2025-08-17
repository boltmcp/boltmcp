import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "fix_totalization_configuration_api_sensor_totalization_diagnosti",
  "toolDescription": "Aplicar correções automáticas em configuração",
  "baseUrl": "https://api.example.com",
  "path": "/api/sensor-totalization/diagnostics/fix-configuration/{config_id}",
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
    "path": {
      "config_id": "config_id"
    },
    "query": {
      "apply_operation_recommendation": "apply_operation_recommendation",
      "apply_parameter_adjustments": "apply_parameter_adjustments"
    }
  },
  inputParamsSchema
}

export default tool
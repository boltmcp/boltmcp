import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_totalization_config_api_sensor_totalization_configs_config_i",
  "toolDescription": "Obter configuração de totalização OTIMIZADO",
  "baseUrl": "https://api.example.com",
  "path": "/api/sensor-totalization/configs/{config_id}",
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
      "config_id": "config_id"
    }
  },
  inputParamsSchema
}

export default tool
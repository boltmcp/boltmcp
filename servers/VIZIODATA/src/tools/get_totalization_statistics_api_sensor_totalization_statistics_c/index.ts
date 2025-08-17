import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_totalization_statistics_api_sensor_totalization_statistics_c",
  "toolDescription": "Obter estatísticas de uma configuração",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/sensor-totalization/statistics/{config_id}",
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
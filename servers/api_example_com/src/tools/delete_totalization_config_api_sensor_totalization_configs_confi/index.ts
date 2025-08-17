import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_totalization_config_api_sensor_totalization_configs_confi",
  "toolDescription": "Deletar configuração de totalização",
  "baseUrl": "https://api.example.com",
  "path": "/api/sensor-totalization/configs/{config_id}",
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
      "config_id": "config_id"
    },
    "query": {
      "hard_delete": "hard_delete"
    }
  },
  inputParamsSchema
}

export default tool
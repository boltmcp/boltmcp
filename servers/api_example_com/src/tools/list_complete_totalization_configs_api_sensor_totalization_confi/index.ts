import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_complete_totalization_configs_api_sensor_totalization_confi",
  "toolDescription": "Listar configurações completas para frontend SUPER OTIMIZADO",
  "baseUrl": "https://api.example.com",
  "path": "/api/sensor-totalization/configs/complete",
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
      "active_only": "active_only",
      "trigger_type": "trigger_type",
      "operation": "operation",
      "source_tag_id": "source_tag_id",
      "limit": "limit",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_totalization_configs_api_sensor_totalization_configs_get",
  "toolDescription": "Listar configurações de totalização",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/sensor-totalization/configs",
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
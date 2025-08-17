import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_windowing_config_api_data_windowing_configs_config_id_get",
  "toolDescription": "Obter configuração específica",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/data-windowing/configs/{config_id}",
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
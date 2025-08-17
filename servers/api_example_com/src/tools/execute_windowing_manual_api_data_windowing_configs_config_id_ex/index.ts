import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "execute_windowing_manual_api_data_windowing_configs_config_id_ex",
  "toolDescription": "Executar janelamento manual",
  "baseUrl": "https://api.example.com",
  "path": "/api/data-windowing/configs/{config_id}/execute/",
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
    "body": {
      "trigger_timestamp": "trigger_timestamp",
      "trigger_value": "trigger_value",
      "notes": "notes"
    }
  },
  inputParamsSchema
}

export default tool
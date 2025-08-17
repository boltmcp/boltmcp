import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "process_historical_totalization_data_disabled_api_sensor_totaliz",
  "toolDescription": "[DESABILITADO] Processar dados históricos de totalização nos sensores",
  "baseUrl": "https://api.example.com",
  "path": "/api/sensor-totalization/process-historical-data-DISABLED",
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
    "query": {
      "config_ids": "config_ids",
      "days_back": "days_back",
      "force_reprocess": "force_reprocess"
    }
  },
  inputParamsSchema
}

export default tool
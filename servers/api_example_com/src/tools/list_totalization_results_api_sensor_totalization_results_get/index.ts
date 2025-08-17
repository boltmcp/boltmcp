import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_totalization_results_api_sensor_totalization_results_get",
  "toolDescription": "Listar resultados de totalização SUPER OTIMIZADO",
  "baseUrl": "https://api.example.com",
  "path": "/api/sensor-totalization/results",
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
      "config_id": "config_id",
      "config_ids": "config_ids",
      "start_date": "start_date",
      "end_date": "end_date",
      "start_time": "start_time",
      "end_time": "end_time",
      "trigger_source": "trigger_source",
      "min_value": "min_value",
      "max_value": "max_value",
      "per_page": "per_page",
      "limit": "limit",
      "offset": "offset",
      "page": "page",
      "chart_mode": "chart_mode"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_mqtt_data_sources_api_diagnostics_mqtt_data_sources_get",
  "toolDescription": "Get Mqtt Data Sources",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/diagnostics/mqtt/data-sources",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool
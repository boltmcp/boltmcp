import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_alarm_api_alarms_alarm_id_get",
  "toolDescription": "Get alarm by ID",
  "baseUrl": "https://api.example.com",
  "path": "/api/alarms/{alarm_id}",
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
      "alarm_id": "alarm_id"
    }
  },
  inputParamsSchema
}

export default tool
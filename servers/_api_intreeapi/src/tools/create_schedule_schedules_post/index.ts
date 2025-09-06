import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_schedule_schedules_post",
  "toolDescription": "Create Schedule",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/schedules",
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
    "body": {
      "hub_id": "hub_id",
      "name": "name",
      "enforce_interval": "enforce_interval",
      "tz": "tz",
      "intervals": "intervals"
    }
  },
  inputParamsSchema
}

export default tool
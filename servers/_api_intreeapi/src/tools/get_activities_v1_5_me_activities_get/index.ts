import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_activities_v1_5_me_activities_get",
  "toolDescription": "Get Activities V1 5",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.5/me/activities",
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
      "limit": "limit",
      "token": "token",
      "activity_type": "activity_type",
      "id": "id"
    }
  },
  inputParamsSchema
}

export default tool
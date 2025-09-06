import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_activities_v1_3_me_activities_get",
  "toolDescription": "Get Activities V1 3",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.3/me/activities",
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
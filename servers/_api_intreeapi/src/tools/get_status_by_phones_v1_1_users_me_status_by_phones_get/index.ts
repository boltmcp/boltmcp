import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_status_by_phones_v1_1_users_me_status_by_phones_get",
  "toolDescription": "Get Status By Phones V1 1",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.1/users/me/status-by-phones",
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
      "phone": "phone"
    }
  },
  inputParamsSchema
}

export default tool
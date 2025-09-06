import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_activity_is_read_businesses_business_id_biz_activities_ac",
  "toolDescription": "Update Activity Is Read",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/businesses/{business_id}/biz-activities/{activity_id}/is-read",
  "method": "patch",
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
      "activity_id": "activity_id",
      "business_id": "business_id"
    },
    "body": {
      "is_read": "is_read"
    }
  },
  inputParamsSchema
}

export default tool
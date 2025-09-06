import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_note_of_user_businesses_business_id_users_user_id_note_pu",
  "toolDescription": "Update Note Of User",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/businesses/{business_id}/users/{user_id}/note",
  "method": "put",
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
      "user_id": "user_id",
      "business_id": "business_id"
    },
    "body": {
      "note": "note"
    }
  },
  inputParamsSchema
}

export default tool
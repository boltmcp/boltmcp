import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_email_settings_by_unsubscribe_token_businesses_business_id_e",
  "toolDescription": "Get Email Settings By Unsubscribe Token",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/businesses/{business_id}/email-settings/by-unsubscribe-token",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "business_id": "business_id"
    },
    "query": {
      "token": "token"
    }
  },
  inputParamsSchema
}

export default tool
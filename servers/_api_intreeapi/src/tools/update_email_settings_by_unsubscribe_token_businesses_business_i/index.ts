import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_email_settings_by_unsubscribe_token_businesses_business_i",
  "toolDescription": "Update Email Settings By Unsubscribe Token",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/businesses/{business_id}/email-settings/by-unsubscribe-token",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "business_id": "business_id"
    },
    "body": {
      "token": "token",
      "email_settings": "email_settings"
    }
  },
  inputParamsSchema
}

export default tool
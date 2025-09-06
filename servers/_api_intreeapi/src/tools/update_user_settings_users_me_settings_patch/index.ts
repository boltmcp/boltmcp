import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_user_settings_users_me_settings_patch",
  "toolDescription": "Update User Settings",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/users/me/settings",
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
    "body": {
      "get_push_on_new_invite": "get_push_on_new_invite",
      "get_push_on_new_introduction": "get_push_on_new_introduction",
      "get_push_on_new_relation": "get_push_on_new_relation",
      "get_push_on_thread_activity": "get_push_on_thread_activity",
      "get_push_on_new_biz_invite": "get_push_on_new_biz_invite",
      "get_push_on_new_treet": "get_push_on_new_treet",
      "get_push_on_new_post": "get_push_on_new_post",
      "get_push_on_owned_biz_updates": "get_push_on_owned_biz_updates",
      "get_push_on_reservation": "get_push_on_reservation"
    }
  },
  inputParamsSchema
}

export default tool
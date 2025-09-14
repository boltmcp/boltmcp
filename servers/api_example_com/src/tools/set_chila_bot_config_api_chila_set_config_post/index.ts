import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "set_chila_bot_config_api_chila_set_config_post",
  "toolDescription": "Set Chila Bot Config",
  "baseUrl": "https://api.example.com",
  "path": "/api/chila/set-config",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "urutan": "urutan",
      "config": "config",
      "admin_notification": "admin_notification",
      "active_notification": "active_notification"
    },
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool
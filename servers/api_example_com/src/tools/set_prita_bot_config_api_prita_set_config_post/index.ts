import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "set_prita_bot_config_api_prita_set_config_post",
  "toolDescription": "Set Prita Bot Config",
  "baseUrl": "https://api.example.com",
  "path": "/api/prita/set-config",
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
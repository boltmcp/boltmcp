import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_unread_notification_count_api_notifications_unread_count_get",
  "toolDescription": "Get Unread Notification Count",
  "baseUrl": "https://api.example.com",
  "path": "/api/notifications/unread-count",
  "method": "get",
  "security": [],
  "paramsMap": {
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool
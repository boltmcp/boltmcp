import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "mark_notifications_as_read_api_notifications_mark_as_read_post",
  "toolDescription": "Mark Notifications As Read",
  "baseUrl": "https://api.example.com",
  "path": "/api/notifications/mark-as-read",
  "method": "post",
  "security": [],
  "paramsMap": {
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool
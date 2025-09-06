import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "send_new_treet_access_notification_internal_notifications_treet_",
  "toolDescription": "Send New Treet Access Notification",
  "baseUrl": "/api/intreeapi",
  "path": "/internal/notifications/treet-access",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "hub_id": "hub_id",
      "hub_name": "hub_name",
      "recipient_ids": "recipient_ids",
      "id": "id",
      "title": "title"
    }
  },
  inputParamsSchema
}

export default tool
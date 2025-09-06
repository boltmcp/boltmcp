import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "send_treet_share_notification_internal_notifications_treet_share",
  "toolDescription": "Send Treet Share Notification",
  "baseUrl": "/api/intreeapi",
  "path": "/internal/notifications/treet-share",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "ambassador_id": "ambassador_id",
      "recipient_ids": "recipient_ids",
      "title": "title",
      "ambassador_name": "ambassador_name"
    }
  },
  inputParamsSchema
}

export default tool
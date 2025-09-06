import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "send_reserve_cooldown_over_notification_internal_notifications_r",
  "toolDescription": "Send Reserve Cooldown Over Notification",
  "baseUrl": "/api/intreeapi",
  "path": "/internal/notifications/reserve-cooldown-over",
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
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "send_reservation_expired_notification_internal_notifications_res",
  "toolDescription": "Send Reservation Expired Notification",
  "baseUrl": "/api/intreeapi",
  "path": "/internal/notifications/reservation-expired",
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
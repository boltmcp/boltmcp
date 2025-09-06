import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "send_reservation_almost_expire_notification_internal_notificatio",
  "toolDescription": "Send Reservation Almost Expire Notification",
  "baseUrl": "/api/intreeapi",
  "path": "/internal/notifications/reservation-almost-expire",
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
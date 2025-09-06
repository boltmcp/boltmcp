import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "send_reserve_soon_out_of_redeems_notification_internal_notificat",
  "toolDescription": "Send Reserve Soon Out Of Redeems Notification",
  "baseUrl": "/api/intreeapi",
  "path": "/internal/notifications/reserve-soon-out-of-redeems",
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
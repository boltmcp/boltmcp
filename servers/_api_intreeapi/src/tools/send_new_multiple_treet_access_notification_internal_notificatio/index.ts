import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "send_new_multiple_treet_access_notification_internal_notificatio",
  "toolDescription": "Send New Multiple Treet Access Notification",
  "baseUrl": "/api/intreeapi",
  "path": "/internal/notifications/multiple-treet-access",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "hub_id": "hub_id",
      "hub_name": "hub_name",
      "pack_id": "pack_id",
      "recipient_ids": "recipient_ids"
    }
  },
  inputParamsSchema
}

export default tool
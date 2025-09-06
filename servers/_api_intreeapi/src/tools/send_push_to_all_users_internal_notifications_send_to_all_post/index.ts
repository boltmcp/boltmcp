import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "send_push_to_all_users_internal_notifications_send_to_all_post",
  "toolDescription": "Send Push To All Users",
  "baseUrl": "/api/intreeapi",
  "path": "/internal/notifications/send-to-all",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "batch_size": "batch_size"
    },
    "body": {
      "title": "title",
      "body": "body"
    }
  },
  inputParamsSchema
}

export default tool
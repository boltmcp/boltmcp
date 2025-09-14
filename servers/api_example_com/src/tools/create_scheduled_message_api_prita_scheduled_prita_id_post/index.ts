import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_scheduled_message_api_prita_scheduled_prita_id_post",
  "toolDescription": "Create Scheduled Message",
  "baseUrl": "https://api.example.com",
  "path": "/api/prita/scheduled/{prita_id}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "prita_id": "prita_id"
    },
    "query": {
      "token": "token"
    },
    "body": {
      "message_content": "message_content",
      "recipient_type": "recipient_type",
      "recipients": "recipients",
      "scheduled_at": "scheduled_at",
      "attachment_url": "attachment_url",
      "recipients_count": "recipients_count",
      "scheduled_name": "scheduled_name"
    }
  },
  inputParamsSchema
}

export default tool
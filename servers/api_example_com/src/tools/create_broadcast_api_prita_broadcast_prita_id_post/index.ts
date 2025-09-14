import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_broadcast_api_prita_broadcast_prita_id_post",
  "toolDescription": "Create Broadcast",
  "baseUrl": "https://api.example.com",
  "path": "/api/prita/broadcast/{prita_id}",
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
      "attachment_url": "attachment_url",
      "recipients_count": "recipients_count"
    }
  },
  inputParamsSchema
}

export default tool
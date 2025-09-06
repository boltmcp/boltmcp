import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "demo_send_notification_demos_send_push_mock_post",
  "toolDescription": "Demo Send Notification",
  "baseUrl": "/api/intreeapi",
  "path": "/demos/send-push-mock",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "push_type": "push_type"
    }
  },
  inputParamsSchema
}

export default tool
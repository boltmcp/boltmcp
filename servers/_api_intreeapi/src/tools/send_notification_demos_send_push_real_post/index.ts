import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "send_notification_demos_send_push_real_post",
  "toolDescription": "Send Notification",
  "baseUrl": "/api/intreeapi",
  "path": "/demos/send-push-real",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "push_type": "push_type"
    }
  },
  inputParamsSchema
}

export default tool
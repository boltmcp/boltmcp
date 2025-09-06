import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "send_email_demos_send_email_post",
  "toolDescription": "Send Email",
  "baseUrl": "/api/intreeapi",
  "path": "/demos/send-email",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "email": "email"
    }
  },
  inputParamsSchema
}

export default tool
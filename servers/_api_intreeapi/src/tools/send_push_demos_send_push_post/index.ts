import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "send_push_demos_send_push_post",
  "toolDescription": "Send Push",
  "baseUrl": "/api/intreeapi",
  "path": "/demos/send-push",
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
    "body": {
      "title": "title"
    }
  },
  inputParamsSchema
}

export default tool
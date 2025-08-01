import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_linewebhook",
  "toolDescription": "Handle LINE webhook events",
  "baseUrl": "https://api.example.com",
  "path": "/line/webhook",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "destination": "destination",
      "events": "events"
    },
    "header": {
      "x-line-signature": "x-line-signature"
    }
  },
  inputParamsSchema
}

export default tool
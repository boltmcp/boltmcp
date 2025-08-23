import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v1_direct_message",
  "toolDescription": "Send message",
  "baseUrl": "/external-api",
  "path": "/v1/direct-message",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "data": "data"
    }
  },
  inputParamsSchema
}

export default tool
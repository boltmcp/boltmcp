import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_commands_commandid_",
  "toolDescription": "Execute a command.",
  "baseUrl": "https://{host}:{port}",
  "path": "/commands/{commandId}/",
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
    "path": {
      "commandId": "commandId"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_device_devices_me_patch",
  "toolDescription": "Update Device",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.1/devices/me",
  "method": "patch",
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
      "push_token": "push_token",
      "voip_token": "voip_token"
    }
  },
  inputParamsSchema
}

export default tool
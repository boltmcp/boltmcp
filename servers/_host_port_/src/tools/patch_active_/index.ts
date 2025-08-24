import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_active_",
  "toolDescription": "Partially update content in the currently open note.",
  "baseUrl": "https://{host}:{port}",
  "path": "/active/",
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
    "header": {
      "Operation": "Operation",
      "Target-Type": "Target-Type",
      "Target-Delimiter": "Target-Delimiter",
      "Target": "Target",
      "Trim-Target-Whitespace": "Trim-Target-Whitespace"
    }
  },
  inputParamsSchema
}

export default tool
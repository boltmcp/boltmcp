import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_vault_pathtodirectory_",
  "toolDescription": "List files that exist in the specified directory.",
  "baseUrl": "https://{host}:{port}",
  "path": "/vault/{pathToDirectory}/",
  "method": "get",
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
      "pathToDirectory": "pathToDirectory"
    }
  },
  inputParamsSchema
}

export default tool
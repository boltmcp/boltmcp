import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_vault_filename_",
  "toolDescription": "Partially update content in an existing note.",
  "baseUrl": "https://{host}:{port}",
  "path": "/vault/{filename}",
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
    "path": {
      "filename": "filename"
    },
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
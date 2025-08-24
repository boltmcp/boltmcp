import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_vault_filename_",
  "toolDescription": "Delete a particular file in your vault.",
  "baseUrl": "https://{host}:{port}",
  "path": "/vault/{filename}",
  "method": "delete",
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
    }
  },
  inputParamsSchema
}

export default tool
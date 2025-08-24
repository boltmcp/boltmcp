import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_vault_filename_",
  "toolDescription": "Create a new file in your vault or update the content of an existing one.",
  "baseUrl": "https://{host}:{port}",
  "path": "/vault/{filename}",
  "method": "put",
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
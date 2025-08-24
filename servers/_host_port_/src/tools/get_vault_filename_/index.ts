import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_vault_filename_",
  "toolDescription": "Return the content of a single file in your vault.",
  "baseUrl": "https://{host}:{port}",
  "path": "/vault/{filename}",
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
      "filename": "filename"
    }
  },
  inputParamsSchema
}

export default tool
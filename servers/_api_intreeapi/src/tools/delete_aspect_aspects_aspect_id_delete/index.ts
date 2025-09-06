import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_aspect_aspects_aspect_id_delete",
  "toolDescription": "Delete Aspect",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/aspects/{aspect_id}",
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
      "aspect_id": "aspect_id"
    }
  },
  inputParamsSchema
}

export default tool
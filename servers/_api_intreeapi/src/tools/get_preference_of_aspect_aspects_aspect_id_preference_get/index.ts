import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_preference_of_aspect_aspects_aspect_id_preference_get",
  "toolDescription": "Get Preference Of Aspect",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/aspects/{aspect_id}/preference",
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
      "aspect_id": "aspect_id"
    }
  },
  inputParamsSchema
}

export default tool
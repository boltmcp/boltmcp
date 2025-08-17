import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_tag_api_tags_tag_id_get",
  "toolDescription": "Get tag by ID",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/tags/{tag_id}",
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
      "tag_id": "tag_id"
    }
  },
  inputParamsSchema
}

export default tool
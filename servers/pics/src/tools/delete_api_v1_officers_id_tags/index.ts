import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_api_v1_officers_id_tags",
  "toolDescription": "Delete Officer Tags",
  "baseUrl": "https://pathwaygroup.picsweb.co.uk/",
  "path": "/api/v1/officers/{id}/tags",
  "method": "delete",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "items": "items"
    }
  },
  inputParamsSchema
}

export default tool
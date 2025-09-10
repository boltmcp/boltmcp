import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_api_v1_organisations_id_tags",
  "toolDescription": "Insert Organisation Tags",
  "baseUrl": "https://pathwaygroup.picsweb.co.uk/",
  "path": "/api/v1/organisations/{id}/tags",
  "method": "post",
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
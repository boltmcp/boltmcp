import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_api_v1_officers",
  "toolDescription": "Insert Officer",
  "baseUrl": "https://pathwaygroup.picsweb.co.uk/",
  "path": "/api/v1/officers",
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
    "body": {
      "firstNames": "firstNames",
      "surname": "surname",
      "email": "email",
      "phone": "phone",
      "roles": "roles"
    }
  },
  inputParamsSchema
}

export default tool